import React from "react";
import { StyledNavbar, StyledNavLogo, StyledSlogan } from "./StyledNavbar";

function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavLogo>Postie</StyledNavLogo>
      <StyledSlogan>your comment application</StyledSlogan>
    </StyledNavbar>
  );
}

export default Navbar;
