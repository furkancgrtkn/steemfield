import React, { useState } from "react";
import {
  ProfileWrapper,
  ProfileBannerWrapper,
  BannerWrapper,
  ProfileInfos,
  ProfileInfosTop,
  UserImage,
  UserName,
  UserElips,
} from "./styled";
import PostCard from "../../components/PostCard/PostCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Profile() {
  return (
    <ProfileWrapper>
      <Navbar />
      <ProfileBannerWrapper>
        <BannerWrapper>
          <LazyLoadImage
            alt="User Banner"
            height="100%"
            effect="opacity"
            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618847999/web-design-concept-with-drawings_1_mhpj7v.png"
            width="100%"
          />
        </BannerWrapper>
        <ProfileInfos>
          <UserImage>
            <LazyLoadImage
              alt="User"
              height="100%"
              effect="opacity"
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
              width="100%"
            />
          </UserImage>
          <ProfileInfosTop>
            <UserName>
              Pelin <span>Özkan</span>
            </UserName>
            <UserElips>(124)</UserElips>
          </ProfileInfosTop>
        </ProfileInfos>
      </ProfileBannerWrapper>
      <Footer />
    </ProfileWrapper>
  );
}

export default Profile;
