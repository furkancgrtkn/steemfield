import React from "react";
import { ProfileWrapper } from "./styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import ProfileTabs from "../../components/ProfileTabs/ProfileTabs";
import PostCard from "../../components/PostCard/PostCard";

function Profile() {
  return (
    <ProfileWrapper>
      <Navbar />
      <ProfileBanner />
      <ProfileTabs />
      <Footer />
    </ProfileWrapper>
  );
}

export default Profile;
