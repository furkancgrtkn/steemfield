import React from "react";
import {
  Logo,
  Navbar as Container,
  NavbarRight,
  NavbarLeft,
  SearchBarInput,
  SearchBarIcon,
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
import { AiOutlineSearch } from "react-icons/ai";
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
          <SearchBarInput placeholder="Search.."></SearchBarInput>
          <SearchBarIcon>
            <AiOutlineSearch color="#2BF2FF" size="16" />
          </SearchBarIcon>
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
