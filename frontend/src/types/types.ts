export interface PostState {
  posts: [] | Post[];
  message: string;
  openModal: boolean;
}

export interface CreatePost {
  author: string;
  content: string;
}

export interface CreateComment {
  author: string;
  content: string;
  postId: number;
}

export interface Post {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  comments: PostComment[];
}

export interface PostComment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}
