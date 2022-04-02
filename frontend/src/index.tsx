import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, Action } from "@reduxjs/toolkit";
import { PostState } from "./types/types";
import { ThunkAction } from "redux-thunk";
import postSliceReducer from "./store/post/post";

export type AppThunk = ThunkAction<
  void,
  PostState,
  unknown,
  Action<string | boolean>
>;

const store = configureStore({
  reducer: {
    postStore: postSliceReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
