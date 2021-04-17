import React from "react";
import Card from "../../components/Card/Card";
import CoinCard from "../../components/CoinCard/CoinCard";
import PostBoard from "../../components/PostBoard/PostBoard";
import BannerBox from "../../components/BannerBox/BannerBox";
import HomePosts from "../../components/HomePosts/HomePosts";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperContainer,
  CoinHeader,
  SwiperContainerCoin,
  CoinHeaderWrapper,
  CoinHeaderButton,
  PostWrapper,
  PostWrapperLeft,
  PostWrapperRight,
} from "./styled";
function Homepage() {
  const MapCounter = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <SwiperContainer>
        <Swiper spaceBetween={50} slidesPerView="auto">
          {MapCounter.map((mapItem, index) => (
            <SwiperSlide key={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <CoinHeaderWrapper>
        <CoinHeader>Coin Marketplace</CoinHeader>
        <CoinHeaderButton>All</CoinHeaderButton>
      </CoinHeaderWrapper>
      <SwiperContainerCoin>
        <Swiper spaceBetween={50} slidesPerView="auto">
          {MapCounter.map((mapItem, index) => (
            <SwiperSlide key={index}>
              <CoinCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainerCoin>
      <PostWrapper>
        <PostWrapperLeft>
          <PostBoard />
          <BannerBox />
        </PostWrapperLeft>
        <PostWrapperRight>
          <HomePosts />
        </PostWrapperRight>
      </PostWrapper>
    </div>
  );
}

export default Homepage;
