import React from "react";
import {
  Card as Container,
  ImageWrapper,
  CardBlock,
  Title,
  Description,
  Footer,
  UserImage,
} from "./styled";

import { BiTime } from "react-icons/bi";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaHeartBroken, FaComment } from "react-icons/fa";
import { FcCurrencyExchange } from "react-icons/fc";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
function Card() {
  return (
    <Container>
      <ImageWrapper>
        <LazyLoadImage
          alt="Card Background"
          height="100%"
          effect="opacity"
          src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618615546/kapak_084058_xugi8k.png"
          width="100%"
        />
      </ImageWrapper>
      <CardBlock>
        <Title>
          <UserImage>
            <LazyLoadImage
              alt="User"
              height="100%"
              effect="opacity"
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
              width="100%"
            />
          </UserImage>
          <h1>max-pro</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <BiTime color="CCD2E3" />
            <span>1 hour ago</span>
          </div>
        </Title>

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ut nam
          vivamus varius ac mus. Urna integerdiammagna
        </Description>
        <Footer>
          <div>
            <AiTwotoneHeart color="#FF0045" />
            <span>22</span>
          </div>
          <div>
            <FaHeartBroken color="FFFFFF" />
            <span>22</span>
          </div>
          <div>
            <FaComment color="FFFFFF" />
            <span>0</span>
          </div>
          <div>
            <FcCurrencyExchange />
            <span>107.88</span>
          </div>

          <div style={{ marginLeft: "auto" }}>
            <RiArrowGoForwardLine color="FFFFFF" />
          </div>
        </Footer>
      </CardBlock>
    </Container>
  );
}

export default Card;
