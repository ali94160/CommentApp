import { useSelector } from "react-redux";
import { postSelector } from "../../store/post/post";
import Post from "../post/PostItem";
import InputSection from "../inputSection/InputSection";
import { StyledWrapper } from "./StyledPost";

function PostContent() {
    const { posts } = useSelector(postSelector);
    console.log(posts, "posts");
  return (
    <StyledWrapper>
      <InputSection />
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </StyledWrapper>
  );
}

export default PostContent;
