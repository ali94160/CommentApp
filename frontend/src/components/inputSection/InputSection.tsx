import { Button } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createComment, createPost } from "../../store/post/post";
import { StyledCommentForm, StyledCommentField } from "./StyledInputSection";

interface Props {
  postId?: number;
}

function InputSection({ postId }: Props) {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content === " " || author === " ") {
      return;
    }
    if (postId) {
      const comment = {
        author,
        content,
        postId,
      };
      dispatch(createComment(comment));
      setAuthor("");
      setContent("");
      return;
    }
    const post = {
      author,
      content,
    };
    dispatch(createPost(post));
    setAuthor("");
    setContent("");
  };

  return (
    <Fragment>
      <StyledCommentForm onSubmit={handleInput} autoComplete="off">
        <StyledCommentField
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          label="Name"
          variant="outlined"
        />
        <StyledCommentField
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label={
            postId
              ? "Write a comment ..."
              : `what are you thinking of today${author && ", " + author}?`
          }
          variant="outlined"
        />
        <Button type="submit" variant="outlined">
          Send
        </Button>
      </StyledCommentForm>
    </Fragment>
  );
}

export default InputSection;
