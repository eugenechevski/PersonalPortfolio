// The root layout component for the blog section\
"use client";

import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <section className="w-screen h-screen">
      {/** Navbar: logo on the left displaying 'E-blog' and 'Home' link on the right point to the root page.*/}
      <nav className="flex w-full h-[10%] p-12 text-white gap-12 text-center">
        {/** Left side */}
        <div className="italic text-3xl">
          <Link href={"/blog"}>E-blog</Link>
        </div>

        {/** Right side */}
        <div className="flex gap-12 mt-2 text-lg items-center ml-auto">
          {/** Home button */}
          <Link href={"/"}>Home</Link>
        </div>
      </nav>
      {/** Main content */}
      <main className="w-full h-[90%]">{children}</main>
    </section>
  );
}
