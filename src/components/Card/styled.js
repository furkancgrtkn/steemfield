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
