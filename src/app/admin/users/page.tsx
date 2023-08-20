// Page for for managing users
"use client";

import Link from "next/link";

import { useState, useEffect } from "react";

import {
  selectUser,
  useSelector,
  useDispatch,
  deleteUserAsync,
  getUsersAsync,
  selectUsersArray
} from "@/redux";

export default function Page() {
  const selectionClasses = "bg-opacity-[25%] bg-gray-500";

  // Users state
  const dispatch = useDispatch();
  const users = useSelector(selectUsersArray);

  // Load users
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  // User state
  const user = useSelector(selectUser);

  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  const deleteUser = () => {
    if (selectedUser?._id === 'eugenechevski') { return; }
    
    dispatch(deleteUserAsync(selectedUser?._id));
  };

  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-white">
      {/** Toolbar */}
      <div className="w-3/4 h-[10%] flex text-shadow">
        {/** Add user button */}
        {user.permissions.createUser && (
          <>
            <Link className="text-shadow" href="/admin/users/new">
              New User
            </Link>
          </>
        )}

        {/** Edit and Delete */}
        {selectedUser && (
          <div className="flex gap-4 ml-auto button-text-shadow">
            {/** Edit button */}
            {user.permissions.editUser && (
              <button>
                <Link href={`/admin/users/${selectedUser?._id}`}>Edit</Link>
              </button>
            )}

            {/** Delete button */}
            {user.permissions.deleteUser && (
              <>
                <button onClick={deleteUser}>Delete</button>
              </>
            )}
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
              <th>Articles Published</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                onClick={() => setSelectedUser(user)}
                className={
                  selectedUser?._id === user?._id ? selectionClasses : ""
                }
              >
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{user.articlesPublished}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
