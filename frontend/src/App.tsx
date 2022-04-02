import { useEffect } from "react";
import { getPosts } from "./store/post/post";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CostumSnackbar from "./components/snackbar/CostumSnackbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <CostumSnackbar />
    </div>
  );
}

export default App;
