import styled from "styled-components";

export const PostList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const PostListItem = styled.li`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  width: fit-content;
  font-weight: ${(props) => (props.firstChild ? "600" : "500")};
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${(props) => (props.firstChild ? "#4f4f4f" : "#FFFFFF")};
  margin-bottom: ${(props) => (props.firstChild ? "15px" : "0")};
  margin-top: ${(props) => (props.firstChild ? "15px" : "4px")};
  cursor: pointer;
  @media (max-width: 1350px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: ${(props) => (props.firstChild ? "10px" : "0")};
    margin-top: ${(props) => (props.firstChild ? "10px" : "4px")};
  }
`;

export const PostBoard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background: #1a2249;
  width: 100%;
  padding: 25px 35px;
  & > ul:last-child > li:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media (max-width: 1350px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
