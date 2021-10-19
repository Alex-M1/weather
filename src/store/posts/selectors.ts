import { POST_KEY } from '@constants/posts';
import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { IPostsState, IPublicPosts } from './types';

export const postsStore = (state: ApplicationState): IPostsState => state.posts;
export const getPublicPosts = createSelector(
  postsStore,
  ({ publicPosts }: IPostsState): IPublicPosts => publicPosts,
);

export const getPrivatePosts = createSelector(
  postsStore,
  ({ privatePosts }: IPostsState): IPublicPosts => privatePosts,
);

export const getPendingPosts = createSelector(
  postsStore,
  ({ pendingPosts }: IPostsState): IPublicPosts => pendingPosts,
);

export const getTotalPage = createSelector(
  postsStore,
  (_state: ApplicationState, page: POST_KEY) => page,
  (posts, page): number => posts[page].total_page,
);

export const getPage = createSelector(
  getPublicPosts,
  ({ page }): number => page,
);
export const getCreatePosts = createSelector(
  postsStore,
  ({ createPost }) => createPost,
);

export const getPostTheme = createSelector(
  getCreatePosts,
  ({ theme }) => theme,
);

export const getCreatePostValue = createSelector(
  getCreatePosts,
  ({ value }) => value,
);

export const getIsSendPost = createSelector(
  getCreatePosts,
  ({ isSendPost }) => isSendPost,
);
