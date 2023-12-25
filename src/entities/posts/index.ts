import { createSlice } from '@reduxjs/toolkit';

import { PostsList, PostsState } from '@/entities/posts/types/types';

const initialState: PostsState = {
  postsList: [],
  headingData: { heading: '', intro: '' },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts(state, action: { payload: PostsList }) {
      state.postsList = action.payload.blocks[0].innerBlocks;
      state.headingData = action.payload.blocks[0].attrs;
    },
  },
});

export const { loadPosts } = postsSlice.actions;

export default postsSlice.reducer;
