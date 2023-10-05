// Page for for managing users
"use client";

import Link from "next/link";

import { useState } from "react";

import {
  selectUser,
  useSelector,
  useDispatch,
  deleteUserAsync,
  selectUsersArray
} from "@/redux";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { selectionClasses } from "@/lib/constants";

export default function Page() {
  // Users state
  const dispatch = useDispatch();
  const users = useSelector(selectUsersArray);

  // User state
  const user = useSelector(selectUser);

  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  const deleteUser = () => {    
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteUserAsync(selectedUser?._id));
            setSelectedUser(null);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-white">
      {/** Toolbar */}
      <div className="w-3/4 h-[10%] flex text-shadow">
        {/** Add user button */}
        {user?.permissions.createUser && (
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
            {user?.permissions.editUser && (
              <button>
                <Link href={`/admin/users/${selectedUser?._id}`}>Edit</Link>
              </button>
            )}

            {/** Delete button */}
            {user?.permissions.deleteUser && selectedUser?.userName !== 'eugenechevski' && (
              <>
                <button onClick={deleteUser}>Delete</button>
              </>
            )}
          </div>
        )}
      </div>

      {/** Users table */}
      <div className="w-1/2 h-[90vh] flex items-center justify-center">
        <table className="w-full border border-white table-auto table-text-center table-border-white table-row-hover-cursor">
          <thead>
            <tr>
              <th className="h-12">#</th>
              <th className="h-12">Name</th>
              <th className="h-12">Date Added</th>
              <th className="h-12">Date Updated</th>
              <th className="h-12">Articles Published</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user?._id}
                onClick={() => setSelectedUser(user)}
                className={
                  selectedUser?._id === user?._id ? selectionClasses : ""
                }
              >
                <td className="h-12">{index + 1}</td>
                <td className="h-12">{user?.userName}</td>
                <td className="h-12">{new Date(user?.createdAt).toLocaleDateString()}</td>
                <td className="h-12">{new Date(user?.updatedAt).toLocaleDateString()}</td>
                <td className="h-12">{user?.articlesPublished}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
