// Page for editing a user

"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState, useEffect, useRef } from "react";

import {
  userNamePattern,
  emailPattern,
  passwordPattern,
} from "@/lib/constants";

import {
  useDispatch,
  useSelector,
  selectUser,
  selectUsersMap,
  editUserAsync,
} from "@/redux";

import { useRouter, useParams} from "next/navigation";

import uniqid from "uniqid";

export default function Page() {
  // Routing and navigation hooks
  const router = useRouter();
  const { userId } = useParams();

  // User that we are editing
  const targetUser = useSelector(selectUsersMap)[userId as string];

  // Redux hooks
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUser);

  // Fields
  const [userName, setUserName] = useState<string>(targetUser?.userName);
  const [email, setEmail] = useState<string>(targetUser?.email);
  const [password, setPassword] = useState<string>();

  const actions = {
    createPost: useRef<HTMLInputElement>(null),
    editPost: useRef<HTMLInputElement>(null),
    deletePost: useRef<HTMLInputElement>(null),
    createUser: useRef<HTMLInputElement>(null),
    editUser: useRef<HTMLInputElement>(null),
    deleteUser: useRef<HTMLInputElement>(null),
  };

  // Determine if the current user has the permissions to edit a user
  useEffect(() => {
    if (loggedInUser.userName.length > 0 && !loggedInUser.permissions.editUser) {
      router.push("/admin/users");
    }
  }, [loggedInUser, router]);

  const editUser = (e) => {
    e.preventDefault();

    const user: AdminUser = {
      _id: targetUser._id,
      userName,
      email,
      password,
      createdAt: targetUser.createdAt,
      updatedAt: Date.now(),
      articlesPublished: targetUser.articlesPublished,
      permissions: {
        createPost: actions.createPost.current.checked,
        editPost: actions.editPost.current.checked,
        deletePost: actions.deletePost.current.checked,
        createUser: actions.createUser.current.checked,
        editUser: actions.editUser.current.checked,
        deleteUser: actions.deleteUser.current.checked,
      },
    };

    dispatch(editUserAsync(user));
    router.push("/admin/users");
  };

  return (
    <section className="w-full h-full flex items-center justify-center">
      <form
        className="w-1/2 h-1/2 flex flex-col justify-center items-center gap-5"
        onSubmit={editUser}
      >
        <Input
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          size="lg"
          pattern={userNamePattern}
        />
        <Input
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          size="lg"
          pattern={passwordPattern}
        />
        <Input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          size="lg"
          pattern={emailPattern}
        />

        {/** Checkbox of access control */}
        {/** Includes: add, edit, and delete posts and users */}
        <fieldset className="text-white mb-5">
          <legend className="text-2xl mb-5">Allowed Actions</legend>
          <div className="flex flex-col gap-2 justify-center">
            {
              targetUser && Object.keys(targetUser.permissions).map((perm) => {
                return (
                  <div
                    key={uniqid()}
                    className="flex flex-row items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      name={perm}
                      ref={actions[perm]}
                      defaultChecked={targetUser.permissions[perm]}
                    />
                    <label htmlFor={perm} className="ml-8 text-center">{perm}</label>
                  </div>
                );
              })
            }
          </div>
        </fieldset>
        <Button textContent="Update" type="submit" />
      </form>
    </section>
  );
}
