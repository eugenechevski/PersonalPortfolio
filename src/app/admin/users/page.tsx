// Page for for managing users

"use client";

import { useState } from "react";
import uniqid from "uniqid";
import Link from "next/link";

const mockUsers: IUser[] = [
  {
    userId: uniqid(),
    fullName: "Eugene Chevski",
    email: "eugenechevski@proton.me",
    password: "eugene123",
    title: "Founder",
    articlesPublished: 12,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 100).getTime(),
  },
  {
    userId: uniqid(),
    fullName: "Nathaly Simpliya",
    email: "nathalysimp@gmail.com",
    password: "nathaly123",
    title: "Editor",
    articlesPublished: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 75).getTime(),
  },
  {
    userId: uniqid(),
    fullName: "Andrew McFlaughter",
    email: "andrewmcflaught@yahoo.me",
    password: "andrew123",
    title: "Author",
    articlesPublished: 7,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 50).getTime(),
  },
];

const selectionClasses = "bg-opacity-[25%] bg-gray-500";

export default function Page() {
  const deleteUser = () => {
    // TODO
  };

  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

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
            {mockUsers.map((user, index) => {
              return (
                <tr
                  key={user.userId}
                  onClick={setSelectedUser.bind(null, user)}
                  className={
                    selectedUser?.userId === user.userId ? selectionClasses : ""
                  }
                >
                  <td>{index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>{user.title}</td>
                  <td>{user.articlesPublished}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
