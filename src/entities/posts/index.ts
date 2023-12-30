import { createSlice } from '@reduxjs/toolkit';

import { PostsList, PostsState, Tabs } from '@/entities/posts/types/types';

const initialState: PostsState = {
  postsList: [],
  headingData: { heading: 'agenda', intro: 'keynotes and sessions' },
  filteredPostsList: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // load posts
    loadPosts(state, action: { payload: PostsList }) {
      if (!action.payload.blocks) return;

      state.postsList = action.payload.blocks[0].innerBlocks;
      state.headingData = action.payload.blocks[0].attrs;

      // initially filter posts by day 1
      if (state.postsList.length) {
        state.filteredPostsList = state.postsList.filter(
          post => post.attrs.day === Tabs.day1,
        );
      }
    },
    // filter posts by day
    filterPosts(state, action: { payload: Tabs }) {
      state.filteredPostsList = state.postsList.filter(
        post => post.attrs.day === action.payload,
      );
    },
  },
});

export const { loadPosts, filterPosts } = postsSlice.actions;

export default postsSlice.reducer;
