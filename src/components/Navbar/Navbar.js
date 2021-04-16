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
import { AiOutlineSearch } from "react-icons/ai";
function Navbar() {
  return (
    <Container>
      <NavbarLeft>
        <Logo>
          Steem<span>field</span>
        </Logo>
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
