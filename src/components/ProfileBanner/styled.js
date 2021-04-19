import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 0 30px;
`;

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 260px;
  & img {
    object-fit: cover;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 25px 0 25px 260px;
  position: relative;
`;

export const UserImage = styled.div`
  display: flex;
  position: absolute;
  left: 60px;
  top: -35px;
  width: 185px;
  height: 185px;
  border-radius: 185px;
  padding: 8px;
  background: #ccd2e3;
  box-shadow: 0px 30px 25px rgba(0, 0, 0, 0.25);
  & img {
    object-fit: cover;
    border-radius: 185px;
  }
`;

export const ProfileInfosTop = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

export const ProfileInfosBottom = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 25px 0;
  position: relative;
`;

export const UserName = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  color: #ffffff;
  margin-right: 15px;

  & > span {
    font-weight: 300;
  }
`;

export const UserElips = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 43px;
  border: 2px solid #2af2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`;

export const Times = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  & img {
    width: 26px;
    height: 26px;
  }

  & span {
    display: flex;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding-top: 2px;
    color: #ffffff;
  }
`;
