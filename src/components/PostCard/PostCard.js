import React from "react";
import {
  PostCard as Container,
  ImageWrapper,
  PostCardContent,
  ContentHeader,
  UserImage,
  UserName,
  ContentHeaderLeft,
  ContentHeaderRight,
  Info,
  InfoText,
  Stats,
  StatsText,
  ContentDesc,
  DescHeader,
  DescText,
} from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiTime } from "react-icons/bi";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaHeartBroken, FaComment, FaHashtag } from "react-icons/fa";
import { FcCurrencyExchange } from "react-icons/fc";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { FiRepeat } from "react-icons/fi";

function PostCard() {
  return (
    <Container>
      <ImageWrapper>
        <LazyLoadImage
          alt="User"
          height="100%"
          effect="opacity"
          src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
          width="100%"
        />
      </ImageWrapper>
      <PostCardContent>
        <ContentHeader>
          <ContentHeaderLeft>
            <UserImage>
              <LazyLoadImage
                alt="User"
                height="100%"
                effect="opacity"
                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
                width="100%"
              />
            </UserImage>
            <UserName>max-pro</UserName>
            <Info>
              <BiTime color="#FFFFFF" size="17" />
              <InfoText>1 hour ago</InfoText>
            </Info>
            <Info>
              <FaHashtag color="#7248E7" size="17" />
              <InfoText>random</InfoText>
            </Info>
          </ContentHeaderLeft>
          <ContentHeaderRight>
            <Stats>
              <AiTwotoneHeart color="#FF0045" size="17" />
              <StatsText normal>22</StatsText>
            </Stats>
            <Stats>
              <FaHeartBroken color="#ffffff" size="17" />
              <StatsText normal>22</StatsText>
            </Stats>
            <Stats>
              <FiRepeat color="#ffffff" size="17" />
              <StatsText normal>22</StatsText>
            </Stats>

            <Stats>
              <FcCurrencyExchange size="17" />
              <StatsText>107.88</StatsText>
            </Stats>
            <Stats>
              <FaComment color="#ffffff" size="17" />
              <StatsText>124</StatsText>
            </Stats>
            <Stats>
              <RiArrowGoForwardLine color="#ffffff" size="17" />
            </Stats>
          </ContentHeaderRight>
        </ContentHeader>
        <ContentDesc>
          <DescHeader>STEEMFIELD - A GUIDE FOR NEWCOMERS</DescHeader>
          <DescText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            diam leo purus imperdiet. In volutpat lacus curabitur non netus
            malesuada. Interdum cursussa Fermentum diam leo purus imperdiet. In
            volutpat lacus curabitur non netus malesuada.
          </DescText>
        </ContentDesc>
      </PostCardContent>
    </Container>
  );
}

export default PostCard;
