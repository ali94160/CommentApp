import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StyledCommentForm = styled.form`
  display: grid;
  grid-template-columns: 5rem 1fr 5rem;
  justify-content: right;
  grid-gap: 0.3rem;
  margin-top: 1rem;
`;

export const StyledCommentField = styled(TextField)`
  &&& {
    width: 100%;
    outline: none;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    font-size: 1rem;
  }
`;

export const StyledBtn = styled(Button)`
 
`;
