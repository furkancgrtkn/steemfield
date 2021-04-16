import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  width: 100%;
  padding: 0 55px;
  max-width: 1920px;
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 95px;
  width: 50%;
  flex-grow: 1;
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
  width: 50%;
  flex-grow: 1;
`;

export const Logo = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #2bf2ff;

  & span {
    color: #7248e7;
    font-weight: 300;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  height: 35px;
  width: 288px;
  color: white;
  background: transparent;
  position: relative;
`;

export const SearchBarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

export const SearchBarInput = styled.input`
  background: transparent;
  width: 288px;
  height: 35px;
  outline: none;
  border: none;
  padding-right: 20px;
  border-bottom: 2px solid #7248e7;
  color: #ccd2e3;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.05em;
  &::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.05em;
    color: #ccd2e3;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 252px;
  height: 42px;
  border: 1px solid #7248e7;
  border-radius: 10px;
  margin: 0 60px;
`;

export const AuthLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 0px;
  border: 1px solid #ccd2e3;
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.05em;
  width: 125px;
  height: 40px;
  color: ${(props) => props.color};
  background: transparent;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 42px;
  height: 20px;
  user-select: none;
  cursor: pointer;
`;

export const MenuBarOne = styled.div`
  display: flex;
  border: 1.5px solid #ccd2e3;
  border-radius: 2px;
  width: 42px;
  height: 0px;
  background: #ccd2e3;
  align-self: flex-end;
`;

export const MenuBarTwo = styled.div`
  display: flex;
  border: 1.5px solid #ccd2e3;
  border-radius: 2px;
  width: 30px;
  height: 0px;
  background: #ccd2e3;
  align-self: flex-end;
`;

export const MenuBarThree = styled.div`
  display: flex;
  border: 1.5px solid #ccd2e3;
  border-radius: 2px;
  width: 18px;
  height: 0px;
  background: #ccd2e3;
  align-self: flex-end;
`;
