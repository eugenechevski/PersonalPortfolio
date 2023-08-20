// Page for for managing users

"use client";

import { useState } from "react";
import uniqid from "uniqid";
import Link from "next/link";

const selectionClasses = "bg-opacity-[25%] bg-gray-500";

export default function Page() {
  const deleteUser = () => {
    // TODO
  };

  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-white">
      {/** Toolbar */}
      <div className="w-3/4 h-[10%] flex text-shadow">
        {/** Add user button */}
        <Link className="text-shadow" href="/admin/users/new">
          New User
        </Link>

        {/** Edit and Delete */}
        {selectedUser && (
          <div className="flex gap-4 ml-auto button-text-shadow">
            <button>
              <Link href={`/admin/users/${selectedUser?.userId}`}>Edit</Link>
            </button>
            <button onClick={deleteUser}>Delete</button>
          </div>
        )}
      </div>

      {/** Users table */}
      <div className="w-full h-[90%] flex items-center justify-center">
        <table className="h-1/2 w-1/2 border border-white table-auto table-text-center table-border-white table-row-hover-cursor">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Added</th>
              <th>Title</th>
              <th>Articles Published</th>
            </tr>
          </thead>
          <tbody>
            {/** Users here */}
          </tbody>
        </table>
      </div>
    </section>
  );
}
