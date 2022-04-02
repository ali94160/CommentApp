import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createComment, createPost } from "../../store/post/post";
import {
  StyledCommentForm,
  StyledBtn,
  StyledCommentField,
} from "./StyledInputSection";

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
      console.log("DONT use empty strings");
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
          // {val === "" && val === undefined ? props.value = null : val}
          onChange={(e) => setContent(e.target.value)}
          label={
            postId
              ? "Write a comment ..."
              : `what are you thinking of today${author && ", " + author}?`
          }
          variant="outlined"
        />
        <StyledBtn type="submit" variant="outlined">
          Send
        </StyledBtn>
      </StyledCommentForm>
    </Fragment>
  );
}

export default InputSection;
