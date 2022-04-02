import { PostComment } from "../../types/types";
import { handleDateAndTime } from "../../utils/utils";
import AvatarSection from "../avatar/AvatarSection";
import {
  StyledCommentWrapper,
  StyledCommentBox,
  StyledName,
  StyledText,
  StyledCommentContent,
  StyledDate,
} from "./StyledComment";

interface Props {
  comment: PostComment;
}

function Comment({ comment }: Props) {
  return (
    <StyledCommentWrapper>
      <StyledCommentBox>
        <AvatarSection name={comment.author} />
        <StyledCommentContent>
          <StyledName>{comment.author}</StyledName>
          <StyledText>{comment.content}</StyledText>
        </StyledCommentContent>
        <StyledDate>{handleDateAndTime(comment.createdAt)}</StyledDate>
      </StyledCommentBox>
    </StyledCommentWrapper>
  );
}

export default Comment;
