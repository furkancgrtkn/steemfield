import styled from "styled-components";

export const SwiperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 395px;
  background-color: transparent;
  padding-left: 55px;
  position: relative;
  margin-top: 40px;
  & .swiper-slide {
    width: fit-content;
  }
  @media (max-width: 1350px) {
    padding-left: 20px;
  }

  @media (max-width: 1100px) {
    height: 280px;
    margin-top: 10px;
  }
`;

export const SwiperContainerCoin = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: transparent;
  padding-left: 55px;
  position: relative;
  margin-top: 40px;
  & .swiper-slide {
    width: fit-content;
  }

  @media (max-width: 1350px) {
    padding-left: 20px;
  }
`;

export const CoinHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  padding: 0 55px;
  margin-top: 40px;
  @media (max-width: 1350px) {
    padding: 0 20px;
  }
`;

export const CoinHeader = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media (max-width: 1100px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const CoinHeaderButton = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: #ffffff;
  background: transparent;
  border: none;
  @media (max-width: 1100px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  padding: 0 55px;
  margin-top: 40px;
  @media (max-width: 1580px) {
    padding: 0 20px 0 55px;
  }
  @media (max-width: 1350px) {
    padding: 0 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PostWrapperLeft = styled.div`
  display: flex;
  width: 360px;
  height: fit-content;
  flex-direction: column;
  @media (max-width: 1350px) {
    width: 100%;
  }
`;

export const PostWrapperRight = styled.div`
  display: flex;
  width: calc(100% - 360px);
  flex-direction: column;
  height: fit-content;
  padding-left: 20px;
  @media (max-width: 1350px) {
    width: 100%;
    padding-left: 0px;
  }
`;
