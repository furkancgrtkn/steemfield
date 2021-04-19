import React from "react";
import { ProfileWrapper } from "./styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import PostCard from "../../components/PostCard/PostCard";
import SideBar from "../../components/SideBar/SideBar";

function Profile() {
  return (
    <ProfileWrapper>
      <Navbar />
      <SideBar />
      <ProfileBanner />
      <Footer />
    </ProfileWrapper>
  );
}

export default Profile;
