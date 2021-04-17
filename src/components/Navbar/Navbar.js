import React from "react";
import {
  Logo,
  Navbar as Container,
  NavbarRight,
  NavbarLeft,
  SearchBar,
  AuthWrapper,
  AuthButton,
  AuthLine,
  Menu,
  MenuBarOne,
  MenuBarTwo,
  MenuBarThree,
} from "./styled";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

function Navbar() {
  return (
    <Container>
      <NavbarLeft>
        <Link to="/">
          <Logo>
            Steem<span>field</span>
          </Logo>
        </Link>
      </NavbarLeft>
      <NavbarRight>
        <SearchBar>
          <SearchBox />
        </SearchBar>
        <AuthWrapper>
          <AuthButton color="#2BF2FF">Log In</AuthButton>
          <AuthLine />
          <AuthButton color="#CCD2E3">Sign Up</AuthButton>
        </AuthWrapper>
        <Menu>
          <MenuBarOne />
          <MenuBarTwo />
          <MenuBarThree />
        </Menu>
      </NavbarRight>
    </Container>
  );
}

export default Navbar;
