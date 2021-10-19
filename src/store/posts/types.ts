import { POST_KEY, ThemesKey } from '@constants/posts';

export interface IPublicPosts {
  posts: IPublicPost[];
  total_page: number;
  page: number;
}

export interface IPostsState {
  publicPosts: IPublicPosts;
  createPost: ICreatePost
  privatePosts: IPublicPosts;
  pendingPosts: IPublicPosts;
}

export interface IPublicPost {
  _id: string;
  _v: number;
  author: IPostAuthor;
  content: string;
  created_at: number;
  theme: string;
  likes: [] | string[];
  img?: string;
}

export interface IPostAuthor {
  _id: string;
  login: string;
  img?: string
}

export interface ICreatePost {
  theme: TThemes;
  value: string,
  isSendPost: boolean;
}

export type TThemes = ThemesKey.art | ThemesKey.music | ThemesKey.tehnology | ThemesKey.think | ThemesKey.work;
export interface TGetPost {
  page: number;
  postRequestName: POST_KEY
}
