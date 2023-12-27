import { createSlice } from '@reduxjs/toolkit';

import { PostsList, PostsState, Tabs } from '@/entities/posts/types/types';

const initialState: PostsState = {
  postsList: [],
  headingData: { heading: '', intro: '' },
  filteredPostsList: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts(state, action: { payload: PostsList }) {
      state.postsList = action.payload.blocks[0].innerBlocks;
      state.headingData = action.payload.blocks[0].attrs;

      // initially filter posts by day 1
      state.filteredPostsList = state.postsList.filter(
        post => post.attrs.day === Tabs.day1,
      );
    },
    filterPosts(state, action: { payload: Tabs }) {
      state.filteredPostsList = state.postsList.filter(
        post => post.attrs.day === action.payload,
      );
    },
  },
});

export const { loadPosts, filterPosts } = postsSlice.actions;

export default postsSlice.reducer;
