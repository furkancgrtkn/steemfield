import React from "react";
import { Card as Container, ImageWrapper, CardBlock } from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
function Card() {
  return (
    <>
      <Container>
        <ImageWrapper>
          <LazyLoadImage
            alt="Card Image"
            height="100%"
            effect="opacity"
            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618615546/kapak_084058_xugi8k.png"
            width="100%"
          />
        </ImageWrapper>
        <CardBlock></CardBlock>
      </Container>
    </>
  );
}

export default Card;
