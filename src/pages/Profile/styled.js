import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  height: fit-content;
  width: 100%;
`;

export const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  & > div:first-child {
    margin-top: 10px;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;
