'use client';

import Link from "next/link";

import { useSession } from "next-auth/react"

import type React from "react";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import {
  getUsersAsync,
  getPostsAsync,
  setUserAsync,
  selectUser,
  useSelector,
  useDispatch,
} from '@/redux'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const { data } = useSession({
    required: true
  });

  useEffect(() => {
    // Load data to redux store
    if (data?.user) {
      dispatch(setUserAsync(data.user.name));
      dispatch(getUsersAsync());
      dispatch(getPostsAsync());
    }
  }, [data, data?.user, dispatch]);

  return (
    <section className="w-screen h-screen">
      <nav className="flex w-full h-[10%] p-12 text-white gap-12 text-center">
        {/** Left side */}
        <div className="flex items-center gap-12">
          {/** Admin page */}
          <div className="italic text-3xl">
            <Link href={"/admin"}>Admin</Link>
          </div>
          {/** Navigations */}
          <div className="mt-2 flex gap-5 text-lg">
            {/** Posts button */}
            <Link href={"/admin/posts"}>Posts</Link>
            {/** Users button */}
            <Link href={"/admin/users"}>Users</Link>
          </div>
        </div>

        {/** Right side */}
        <div className="flex gap-12 mt-2 text-lg items-center ml-auto">
          <span className="text-xl whitespace-nowrap">{`Hey, ${user.userName}`}</span>
          <FontAwesomeIcon className="w-6" icon={faUser}></FontAwesomeIcon>
          <Link href={"/api/auth/signout"}>
            <FontAwesomeIcon
              className="w-6"
              icon={faRightFromBracket}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </nav>
      <main className="w-full h-[90%]">
        {children}
      </main>
    </section>
  );
}
