import { createAppAsyncThunk } from '@/redux/createAppAsyncThunk'

export const getPostsAsync = createAppAsyncThunk(
  'posts/getPosts',
  async () => {
    const data = await fetch('/api/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    return data;
  }
);

export const addPostAsync = createAppAsyncThunk(
  'posts/addPost',
  async (post: IPost) => {
    const data = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());

    return data;
  }
);

export const deletePostAsync = createAppAsyncThunk(
  'posts/deletePost',
  async (postId: string) => {
    const data = await fetch('/api/posts', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId }),
    }).then((res) => res.json());

    return data;
  }
);

export const editPostAsync = createAppAsyncThunk(
  'posts/editPost',
  async (post: IPost) => {
    const data = await fetch('/api/posts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());

    return data;
  }
);