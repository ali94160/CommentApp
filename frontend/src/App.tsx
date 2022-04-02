import { useEffect } from "react";
import {
  postSelector,
  getPosts,
  createPost,
  createComment,
} from "./store/post/post";
import { CreatePost } from "./types/types";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CostumSnackbar from "./components/snackbar/CostumSnackbar";

function App() {
  const dispatch = useDispatch();
  const { posts } = useSelector(postSelector);

  useEffect(() => {
    dispatch(getPosts());
    console.log("UseEffect triggat");
  }, [dispatch]);

  // const postData: CreatePost = {
  //   author: "FE Post NY 53",
  //   content: "NY 53 test from frontend Post",
  // };
  // const commentData = {
  //   author: "FE-Rickard55",
  //   content: "NYA Rickard55 kommentar",
  //   postId: 53,
  // };

  // const handlePostBtn = () => {
  //   dispatch(createPost(postData));
  //   console.log(posts, "posts");
  // };

  // const handleCommentBtn = () => {
  //   dispatch(createComment(commentData));
  //   console.log(posts, "posts");
  // };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <CostumSnackbar/>
    </div>
  );
}

// TODO:
/*
 - Reply comment knapp för visa input fält
 - connecta create post 
 - connecta createComment
 - Kolla så man ej behöver hard-refresha för att se den nya posten/comment

*/
export default App;
