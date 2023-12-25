import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import PostsReducer from '@/entities/posts';
import { rootApi } from '@/shared/api/rootApi';

const rootReducer = combineReducers({
  posts: PostsReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(rootApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });

export const store = createStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
