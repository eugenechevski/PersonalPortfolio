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

const selectionClasses = "bg-opacity-[25%] bg-gray-500";

export default function Page() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsArray);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  const user = useSelector(selectUser);

  const deletePost = () => {
    dispatch(deletePostAsync(selectedPost._id));
  };

  const publishPost = () => {
    dispatch(editPostAsync({ ...selectedPost, published: true }));
    setSelectedPost({ ...selectedPost, published: true });
  };

  const unpublishPost = () => {
    dispatch(editPostAsync({ ...selectedPost, published: false }));
    setSelectedPost({ ...selectedPost, published: false });
  };

  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-white">
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
      <div className="w-full h-[90%] flex items-center justify-center">
        <table className="h-1/2 w-1/2 border border-white table-auto table-text-center table-border-white table-row-hover-cursor">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date Added</th>
              <th>Date Updated</th>
              <th>Status</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => {
              return (
                <tr
                  key={post._id}
                  onClick={setSelectedPost.bind(null, post)}
                  className={
                    selectedPost?._id === post._id ? selectionClasses : ""
                  }
                >
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                  <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(post.updatedAt).toLocaleDateString()}</td>
                  <td>{post.published ? "Published" : "Unpublished"}</td>
                  <td>{post.author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
