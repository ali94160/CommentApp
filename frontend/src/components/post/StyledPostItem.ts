import styled from "styled-components";

export const StyledPostWrapper = styled.div`
  display: grid;
  width: 55vw;
  max-width: 55vw;
  min-width: 460px;
  margin: 3rem auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 1rem;
  border-radius: 0.5rem;

  /* 90deg,
  #ffa745,
  #fe869f 30%,

  #ef7ac8 45%,

  #a083ed 70%,
  #43aeff 85%  */
  &:hover {
    box-shadow: 1px 1px 1px 1px rgb(67, 174, 255);
  }
`;

export const StyledPostContent = styled.div`
  display: grid;
  grid-template-columns: 2.65rem 1fr;
  justify-content: right;
  grid-gap: 0.3rem;
`;

export const StyledCommentContent = styled.div``;

export const StyledPostDiv = styled.div`
  min-width: 40vw;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
