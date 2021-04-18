import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c2c1c1;
  margin-top: 55px;
  margin-left: 55px;
  margin-right: 55px;
  @media (max-width: 1350px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Logo = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #2bf2ff;
  user-select: none;
  cursor: pointer;
  padding-bottom: 30px;

  & span {
    color: #7248e7;
    font-weight: 300;
  }
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  & > h4 {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    line-height: 30px;
    font-weight: 400;
    color: #ffffff;
    opacity: 0.7;
    padding-bottom: 6px;
  }

  & > h4:nth-child(3) {
    padding-bottom: 22px;
  }
`;

export const ColsContainer = styled.div`
  padding: 15px 47px 15px 23px;
  display: flex;
  @media (max-width: 1170px) {
    flex-direction: column;
  }
  @media (max-width: 450px) {
    padding: 15px 23px;
  }
`;

export const SectionCols = styled.div`
  padding-top: 14px;
  display: flex;
  margin-left: auto;
  @media (max-width: 1170px) {
    margin-left: unset;
    padding-top: 25px;
  }
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 181px;
  & > h3:last-child {
    margin-bottom: unset;
  }

  @media (max-width: 1700px) {
    margin-left: 100px;
  }
  @media (max-width: 1170px) {
    margin-left: unset;
    margin-right: 50px;
  }
  @media (max-width: 740px) {
    margin-bottom: 20px;
  }
`;
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
  opacity: 0.8;
  margin-bottom: 21px;
`;
export const Row = styled.h3`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  opacity: 0.7;
  margin-bottom: 11px;
  user-select: none;
  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;

export const CoinsRow = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #c2c1c1;
  border-bottom: 1px solid #c2c1c1;
  padding: 16px 0;
  margin-top: 42px;

  & > h3 {
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    opacity: 0.7;
    padding: 0 58.5px;
    line-height: 22px;
  }

  & > h3:active {
    transform: scale(0.95);
    transition: 0.1s;
  }

  & > h3:first-child {
    cursor: unset;
    padding: 0;
    margin-right: auto;
  }

  & > h3:first-child:active {
    transform: unset;
  }

  & > h3:last-child {
    padding: 0;
    margin-left: auto;
  }

  & > h3 > svg {
    margin-left: 9px;
  }

  @media (max-width: 1700px) {
    & > h3 {
      padding: 0 10px;
    }
  }
  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 23px;
    & > h3 {
      padding: 0px;
      padding-bottom: 10px;
    }
    & > h3:first-child {
      padding-bottom: 20px;
    }
  }
  @media (max-width: 740px) {
    margin-top: 10px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  padding: 25px 39px;
  padding-bottom: 32px;
  justify-content: flex-end;
  & > h3 {
    user-select: none;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    opacity: 0.7;
    margin-left: 54px;
  }

  & > h3:active {
    transform: scale(0.95);
    transition: 0.1s;
  }

  @media (max-width: 500px) {
    padding-left: 0px;
    padding-right: 0px;
    justify-content: space-evenly;
    & > h3 {
      margin: 0;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    margin-left: 23px;
    & > h3 {
      margin-bottom: 10px;
    }
  }
`;
