import { Post, PostComment } from "../../types/types";
import { handleDateAndTime } from "../../utils/utils";
import AvatarSection from "../avatar/AvatarSection";
import Comment from "../comment/Comment";
import {
  StyledName,
  StyledText,
  StyledCommentContent,
  StyledDate,
} from "../comment/StyledComment";
import InputSection from "../inputSection/InputSection";
import { StyledPostWrapper, StyledPostContent } from "./StyledPostItem";

interface Props {
  post: Post;
}
function PostItem({ post }: Props) {
  const { author, comments, content } = post;
  return (
    <StyledPostWrapper>
      <StyledPostContent>
        <AvatarSection name={post.author} />
        <StyledCommentContent>
          <StyledName>{author}</StyledName>
          <StyledText>{content}</StyledText>
        </StyledCommentContent>
        <StyledDate>{handleDateAndTime(post.createdAt)}</StyledDate>
      </StyledPostContent>
      <div>
        {comments &&
          comments.map((comment: PostComment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
      <div>
        <InputSection postId={post.id} />
      </div>
    </StyledPostWrapper>
  );
}

export default PostItem;
