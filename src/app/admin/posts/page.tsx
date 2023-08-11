"use client";

import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Link from "next/link";

import {
  useDispatch,
  useSelector,
  postsSlice,
  selectPosts,
  addPostAsync,
  editPostAsync,
  deletePostAsync,
  getPostsAsync,
} from '@/redux'

const mockPosts: IPost[] = [1, 2, 3, 4].map((n) => {
  return {
    postId: uniqid(),
    title: "How to Create an Awesome Blog",
    imageURL:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667",
    content: "asdsad",
    author: "Suvashi Poblano",
    tags: [],
    likes: 100,
    replies: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    published: true,
  };
});

const selectionClasses = "bg-opacity-[25%] bg-gray-500";

export default function Page() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  // Load posts
  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  const deletePost = () => {
    dispatch(deletePostAsync(selectedPost?.postId));
  };

  const publishPost = () => {
    dispatch(editPostAsync({ ...selectedPost, published: true }));
  };

  const unpublishPost = () => {
    dispatch(editPostAsync({ ...selectedPost, published: false }));
  };

  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-white">
      {/** Toolbar */}
      <div className="w-3/4 h-[10%] flex text-shadow">
        {/** Add post button */}
        <Link className="text-shadow" href="/admin/posts/new">
          New post
        </Link>

        {/** Edit, Delete, and Publish/Unpublish buttons */}
        {selectedPost && (
          <div className="flex gap-4 ml-auto button-text-shadow">
            <button>
              <Link href={`/admin/posts/${selectedPost?.postId}`}>Edit</Link>
            </button>
            <button onClick={deletePost}>Delete</button>
            {/** Conditional rendering for published or unpublished posts*/}
            {selectedPost?.published ? (
              <button onClick={unpublishPost}>Unpublish</button>
            ) : (
              <button onClick={publishPost}>Publish</button>
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
              <th>Date</th>
              <th>Status</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => {
              return (
                <tr
                  key={post.postId}
                  onClick={setSelectedPost.bind(null, post)}
                  className={
                    selectedPost?.postId === post.postId ? selectionClasses : ""
                  }
                >
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                  <td>{new Date(post.createdAt).toLocaleDateString()}</td>
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
