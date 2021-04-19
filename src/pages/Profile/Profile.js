import React from "react";
import { ProfileWrapper } from "./styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import PostCard from "../../components/PostCard/PostCard";

function Profile() {
  return (
    <ProfileWrapper>
      <Navbar />
      <ProfileBanner />
      <Footer />
    </ProfileWrapper>
  );
}

export default Profile;
