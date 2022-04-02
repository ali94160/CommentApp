import styled from "styled-components";

export const StyledCommentWrapper = styled.div`
  display: grid;
  margin: 1.5rem 0 1rem 3rem;
  grid-gap: 0.3rem;
`;

export const StyledCommentBox = styled.div`
  display: grid;
  grid-template-columns: 2.65rem 1fr;
  grid-gap: 0.3rem;
`;

export const StyledName = styled.p`
  margin: 0;
  padding-top: 0;
  text-decoration: none;
  font-weight: bold;
  color: #0071e3;
`;

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
`;
export const StyledCommentContent = styled.div`
  background-color: #e9ebee;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: fit-content;
`;

export const StyledDate = styled.span`
  font-size: 0.5rem;
  grid-column: 2 / 2;
`;
