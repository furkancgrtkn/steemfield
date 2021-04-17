import styled from "styled-components";

export const PostCard = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  align-items: center;
  padding: 0 25px 0 15px;
  justify-content: space-between;
  background: #121836;
  border-radius: 30px;
  margin: 10px 0;

  @media (max-width: 1580px) {
    height: 160px;
  }
  @media (max-width: 940px) {
    flex-direction: column;
    height: 340px;
    justify-content: center;
    padding: 0 15px 0 15px;
  }
  @media (max-width: 406px) {
    height: 430px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 157px;
  height: 140px;
  background-color: transparent;
  border-radius: 30px;
  & img {
    object-fit: cover;
    border-radius: 30px;
  }
  @media (max-width: 1580px) {
    width: 140px;
  }
  @media (max-width: 940px) {
    width: 100%;
    height: 140px;
  }
`;

export const PostCardContent = styled.div`
  display: flex;
  width: calc(100% - 157px);
  height: 160px;
  flex-direction: column;
  padding-left: 30px;
  @media (max-width: 1580px) {
    width: calc(100% - 140px);
    padding-left: 15px;
  }
  @media (max-width: 940px) {
    margin-top: 10px;
    width: 100%;
    padding: 5px;
  }
  @media (max-width: 406px) {
    height: fit-content;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: fit-content;
  margin: 15px 0;
  justify-content: space-between;
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
  }
  @media (max-width: 406px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContentHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 406px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContentHeaderRight = styled.div`
  display: flex;
  @media (max-width: 940px) {
    margin-top: 10px;
  }
  @media (max-width: 406px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0px;
  }
`;

export const UserImage = styled.div`
  display: flex;
  width: 49px;
  height: 49px;
  background-color: transparent;
  border-radius: 49px;
  & img {
    object-fit: cover;
    border-radius: 49px;
  }

  @media (max-width: 1580px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 406px) {
    margin-bottom: 10px;
  }
`;

export const UserName = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-left: 10px;
  color: #ffffff;
  @media (max-width: 1580px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 940px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 940px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media (max-width: 406px) {
    margin-left: 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-left: 50px;
  @media (max-width: 1580px) {
    margin-left: 35px;
  }
  @media (max-width: 1450px) {
    margin-left: 20px;
  }
  @media (max-width: 940px) {
    margin-left: 15px;
  }
  @media (max-width: 406px) {
    margin-left: 0px;
    margin-top: 3px;
  }
`;

export const InfoText = styled.span`
  display: flex;
  margin-left: 4px;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  @media (max-width: 1580px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media (max-width: 940px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Stats = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  @media (max-width: 1580px) {
    margin-left: 15px;
  }

  @media (max-width: 1450px) {
    margin-left: 13px;
  }

  @media (max-width: 940px) {
    &:first-child {
      margin-left: 0;
    }
  }
  @media (max-width: 406px) {
    margin-left: 0px;
    margin-top: 3px;
    align-self: flex-end;
  }
`;

export const StatsText = styled.span`
  display: flex;
  margin-left: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${(props) => (props.normal ? "400" : "600")};
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  @media (max-width: 1580px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 940px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ContentDesc = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const DescHeader = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  @media (max-width: 1580px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 940px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const DescText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 5px;
  height: 44px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1580px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 940px) {
    font-size: 12px;
    line-height: 14px;
  }
`;