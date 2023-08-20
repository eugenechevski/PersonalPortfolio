"use client";

// Page for creating a new user
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState, useRef } from "react";

import {
  userNamePattern,
  emailPattern,
  passwordPattern,
} from "@/lib/constants";

import uniqid from "uniqid";

export default function Page() {
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
  }

  const createUser = (e) => {
    e.preventDefault();

    const user: AdminUser = {
      userId: uniqid(),
      userName,
      email,
      password,
      createdAt: Date.now(),
      articlesPublished: 0,
      permissions: {
        createPost: actions.add_posts.current.checked,
        editPost: actions.edit_posts.current.checked,
        deletePost: actions.delete_posts.current.checked,
        createUser: actions.add_users.current.checked,
        editUser: actions.edit_users.current.checked,
        deleteUser: actions.delete_users.current.checked,
      }
    }

    console.log(user);
  };

  return (
    <section className="w-full h-full flex items-center justify-center">
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
        />

        {/** Checkbox of access control */}
        {/** Includes: add, edit, and delete posts and users */}
        <fieldset className="text-white mb-5">
          <legend className="text-2xl mb-5">Allowed Actions</legend>
          <div className="flex flex-col gap-2 justify-center">
            {
              Object.keys(actions).map((action) => {
                return (
                  <div key={uniqid()} className="flex flex-row items-center gap-2">
                    <input
                      type="checkbox"
                      name={action}
                      ref={actions[action]}
                    />
                    <label htmlFor={action} className="ml-8 text-center">{action.split('_').join(' ')}</label>
                  </div>
                )
              })
            }
            
          </div>
        </fieldset>
        <Button textContent="Create" type="submit" />
      </form>
    </section>
  );
}
