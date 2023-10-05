// Page for creating a new user
"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState, useRef, useEffect } from "react";

import {
  userNamePattern,
  emailPattern,
  passwordPattern,
} from "@/lib/constants";

import uniqid from "uniqid";

import { useSelector, selectUser, addUserAsync, useDispatch } from "@/redux";

import { useRouter } from "next/navigation";

import bcrypt from "bcryptjs";

export default function Page() {
  const router = useRouter();

  // User state
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Determine if the current user has the permissions to create a user
  useEffect(() => {
    if (user.userName.length > 0 && !user.permissions.createUser) {
      router.push("/admin/users");
    }
  }, [user, router]);

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const actions = {
    add_posts: useRef<HTMLInputElement>(null),
    edit_posts: useRef<HTMLInputElement>(null),
    delete_posts: useRef<HTMLInputElement>(null),
    add_users: useRef<HTMLInputElement>(null),
    edit_users: useRef<HTMLInputElement>(null),
    delete_users: useRef<HTMLInputElement>(null),
  };

  const createUser = (e) => {
    e.preventDefault();

    const user: AdminUser = {
      _id: uniqid(),
      userName,
      email,
      password: bcrypt.hashSync(password, 10),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      articlesPublished: 0,
      permissions: {
        createPost: actions.add_posts.current.checked,
        editPost: actions.edit_posts.current.checked,
        deletePost: actions.delete_posts.current.checked,
        createUser: actions.add_users.current.checked,
        editUser: actions.edit_users.current.checked,
        deleteUser: actions.delete_users.current.checked,
      },
    };

    dispatch(addUserAsync(user));
    router.push("/admin/users");
  };

  return (
    <section className="w-full h-[90vh] flex items-center justify-center">
      {/** Form for creating a user: name, email, password, and title */}
      <form
        className="w-1/2 h-1/2 flex flex-col justify-center items-center gap-5"
        onSubmit={createUser}
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
          maxLength={50}
        />

        {/** Checkbox of access control */}
        {/** Includes: add, edit, and delete posts and users */}
        <fieldset className="text-white mb-5">
          <legend className="text-2xl mb-5">Allowed Actions</legend>
          <div className="flex flex-col gap-2 justify-center">
            {Object.keys(actions).map((action) => {
              return (
                <div
                  key={uniqid()}
                  className="flex flex-row items-center gap-2"
                >
                  <input type="checkbox" name={action} ref={actions[action]} />
                  <label htmlFor={action} className="ml-8 text-center">
                    {action.split("_").join(" ")}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
        <Button textContent="Create" type="submit" />
      </form>
    </section>
  );
}
