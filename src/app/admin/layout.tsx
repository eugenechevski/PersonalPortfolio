import type React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-screen h-screen">
      <nav className="flex w-full h-1/6 p-12 text-white gap-12 text-center">
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
          <span className="text-xl whitespace-nowrap">Hey, Eugene</span>
          <FontAwesomeIcon className="w-6" icon={faUser}></FontAwesomeIcon>
          <Link href={"/admin/login"}>
            <FontAwesomeIcon
              className="w-6"
              icon={faRightFromBracket}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </nav>
      {children}
    </section>
  );
}
