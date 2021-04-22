import React, { useState } from "react";
import { ProfileWrapper, PostSection, PostWrapper } from "./styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import ProfileTabs from "../../components/ProfileTabs/ProfileTabs";
import PostCard from "../../components/PostCard/PostCard";
import SideBar from "../../components/SideBar/SideBar";

function Profile() {
  const Mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const MapperTwo = [1, 2];
  const [section, setSection] = useState(1);
  return (
    <ProfileWrapper>
      <Navbar />
      <SideBar />
      <ProfileBanner />
      <ProfileTabs setSection={setSection} />
      <PostSection>
        {section === 1 &&
          Mapper.map((mapItem, index) => (
            <PostWrapper key={index}>
              <PostCard />
            </PostWrapper>
          ))}
        {section === 2 &&
          MapperTwo.map((mapItem, index) => (
            <PostWrapper key={index}>
              <PostCard />
            </PostWrapper>
          ))}
      </PostSection>
      <Footer />
    </ProfileWrapper>
  );
}

export default Profile;
