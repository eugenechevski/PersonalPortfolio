"use client";

import { useState } from "react";
import Link from "next/link";

import {
  useDispatch,
  useSelector,
  selectPostsArray,
  editPostAsync,
  deletePostAsync,
  selectUser,
} from "@/redux";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { selectionClasses } from "@/lib/constants";

export default function Page() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsArray);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  const user = useSelector(selectUser);

  const deletePost = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deletePostAsync(selectedPost._id));
            setSelectedPost(null);
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

  const publishPost = () => {
    confirmAlert({
      title: "Confirm publish",
      message: "Are you sure you want to publish this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(editPostAsync({ ...selectedPost, published: true }));
            setSelectedPost({ ...selectedPost, published: true });
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

  const unpublishPost = () => {
    confirmAlert({
      title: "Confirm unpublish",
      message: "Are you sure you want to unpublish this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(editPostAsync({ ...selectedPost, published: false }));
            setSelectedPost({ ...selectedPost, published: false });
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
    <section className="h-[90vh] w-full flex flex-col justify-center items-center text-white">
      {/** Toolbar */}
      <div className="w-3/4 h-[10%] flex text-shadow">
        {/** Add post button */}
        {user.permissions.createPost && (
          <>
            <Link className="text-shadow" href="/admin/posts/new">
              New post
            </Link>
          </>
        )}

        {/** Edit, Delete, and Publish/Unpublish buttons */}
        {selectedPost && (
          <div className="flex gap-4 ml-auto button-text-shadow">
            {/** Edit post button */}
            {user.permissions.editPost && (
              <>
                <button>
                  <Link href={`/admin/posts/${selectedPost?._id}`}>Edit</Link>
                </button>

                {/** Publish/Unpublish post button */}
                <button
                  onClick={
                    selectedPost?.published ? unpublishPost : publishPost
                  }
                >
                  {selectedPost?.published ? "Unpublish" : "Publish"}
                </button>
              </>
            )}

            {/** Delete post button */}
            {user.permissions.deletePost && (
              <>
                <button onClick={deletePost}>Delete</button>
              </>
            )}
          </div>
        )}
      </div>

      {/** Posts table */}
      <div className="w-1/2 h-[90%] flex items-center justify-center">
        <table className="w-full border border-white table-auto table-text-center table-border-white table-row-hover-cursor">
          <thead>
            <tr>
              <th className="w-[8.33%]">#</th>
              <th className="w-1/2">Title</th>
              <th className="w-[10.42%]">Date Added</th>
              <th className="w-[10.42%]">Date Updated</th>
              <th className="w-[10.42%]">Status</th>
              <th className="w-[10.42%]">Author</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr
                key={post._id}
                onClick={setSelectedPost.bind(null, post)}
                className={`${
                  selectedPost?._id === post._id && selectionClasses
                    ? selectionClasses
                    : ""
                }`}
              >
                <td className="w-[8.33%] h-12">{index + 1}</td>
                <td className="w-1/2 h-12">
                  {post.title}
                </td>
                <td className="w-[10.42%] h-12">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="w-[10.42%] h-12">
                  {new Date(post.updatedAt).toLocaleDateString()}
                </td>
                <td className="w-[10.42%] h-12">
                  {post.published ? "Published" : "Unpublished"}
                </td>
                <td className="w-[10.42%] h-12">{post.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
