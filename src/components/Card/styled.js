import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 395px;
  height: 395px;
  border-radius: 20px;
  background-color: #30385a;
  position: relative;
`;

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  z-index: 2;
  left: 0;
  width: 100%;
  height: 180px;
  border-radius: 20px;
  background: linear-gradient(
    0deg,
    rgba(26, 34, 73, 0.9) 0%,
    rgba(74, 81, 174, 0.315) 100%
  );
  padding: 11px 12px;
  padding-bottom: 19px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  & > h1 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }

  & span {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #ccd2e3;
  }

  & svg {
    width: 22px;
    height: 22px;
    margin-right: 9px;
  }
`;

export const UserImage = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 100%;
  margin-right: 10px;
  & img {
    object-fit: cover;
    border-radius: 100%;
  }
`;

export const Description = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 17px;
    height: 17px;
    margin-right: 4px;
  }
  & svg:last-child {
    margin-right: unset;
    width: 22px;
    height: 22px;
  }

  & > div {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
  & > div:last-child {
    margin-right: unset;
  }

  & span {
    font-family: Montserrat;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #30385a;
  & img {
    object-fit: cover;
    border-radius: 20px;
  }
`;
