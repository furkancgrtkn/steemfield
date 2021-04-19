import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 359px;
  height: 100%;
  background: #121836;
  z-index: 2;
  transform: ${(props) =>
    props.open ? css`translateX(0px)` : css`translateX(-279px)`};
  transition: 0.5s;
  padding: 47px 25px 40px 25px;
  @media only screen and (max-width: 800px) {
    width: 250px;
    padding-left: 15px;
    transform: ${(props) =>
      props.open ? css`translateX(0px)` : css`translateX(-179px)`};
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  transform: ${(props) =>
    props.open ? css`translateX(0px)` : css`translateX(263px)`};
  transition: 0.5s;
  width: 61px;
  height: 61px;
  background: #7248e7;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  @media only screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
    transform: ${(props) =>
      props.open ? css`translateX(0px)` : css`translateX(178px)`};
    & > svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: -0.05em;
  color: #ffffff;
  margin-top: 100px;
  @media only screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 70px;
  }
`;

export const Search = styled.div`
  width: 289px;
  margin-top: 30px;
  @media only screen and (max-width: 800px) {
    width: 200px;
  }
`;

export const UsersWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 40px;
  @media only screen and (max-width: 800px) {
    margin-top: 30px;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  & > span {
    padding-left: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
  margin-bottom: 23px;
  @media only screen and (max-width: 800px) {
    & > span {
      font-size: 14px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  background: #c4c4c4;
  border-radius: 100%;
  & img {
    object-fit: cover;
    border-radius: 100%;
  }
  @media only screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
  }
`;
