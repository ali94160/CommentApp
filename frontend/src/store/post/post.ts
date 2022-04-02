import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../../index";
import { CreateComment, CreatePost, PostState, Post } from "../../types/types";

const initialState: PostState = {
  posts: [],
  message: "",
  openModal: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
    setModalOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.openModal = payload;
    },
    setPosts: (state, { payload }: PayloadAction<Post[]>) => {
      state.posts = payload;
    },
    updatePost: (state, { payload }: PayloadAction<Post>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === payload.id) {
          post = payload;
        }
        return post;
      });
    },
    updatePosts: (state, { payload }: PayloadAction<Post>) => {
      state.posts.length > 0
        ? (state.posts = [payload, ...state.posts])
        : (state.posts = [payload]);
    },
  },
});
const UNEXPECTED_ERROR_MESSAGE = "Unexpected error, try again later.";

export const {
  setPosts,
  updatePost,
  updatePosts,
  setErrorMessage,
  setModalOpen,
} = postSlice.actions;

export const getPosts = (): AppThunk => {
  return async (dispatch) => {
    const url = "/rest/posts";
    try {
      const resPosts = await axios.get(url);
      dispatch(setPosts(resPosts.data));
    } catch (error) {
      dispatch(setErrorMessage(UNEXPECTED_ERROR_MESSAGE));
      dispatch(setModalOpen(true));
    }
  };
};

export const createPost = (data: CreatePost): AppThunk => {
  return async (dispatch) => {
    const url = "/rest/post";
    try {
      const resPost = await axios.post(url, data);
      dispatch(updatePosts(resPost.data));
    } catch (error) {
      dispatch(setErrorMessage(UNEXPECTED_ERROR_MESSAGE));
      dispatch(setModalOpen(true));
    }
  };
};

export const createComment = (data: CreateComment): AppThunk => {
  return async (dispatch) => {
    try {
      const url = "/rest/commen";
      const resComment = await axios.post(url, data);
      dispatch(updatePost(resComment.data));
    } catch (error) {
      dispatch(setErrorMessage(UNEXPECTED_ERROR_MESSAGE));
      dispatch(setModalOpen(true));
    }
  };
};

export default postSlice.reducer;

export const postSelector = (state: { postStore: PostState }) =>
  state.postStore;
