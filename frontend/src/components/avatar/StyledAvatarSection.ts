import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

export const StyledAvatarSection = styled.div`
  width: 100%;
  z-index: 1;
  display: grid;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const StyledAvatar = styled(Avatar)`
  &&& {
    background: linear-gradient(
      90deg,
      #ffa745,
      #fe869f 30%,
      #ef7ac8 45%,
      #a083ed 70%,
      #43aeff 85%
    );
  }
`;
