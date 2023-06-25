import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import LargerButton from '../../components/LargerButton';
import AboutModal from '../../components/Modals/AboutModal';
import LoginModal from '../../components/Modals/LoginModal';
import SignupModal from '../../components/Modals/SignupModal';
import background from '../../assets/images/PublicHomeBackground.png';
import logo from '../../assets/images/Logo.png';
import './PublicHome.css';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

function PublicHome() {
  const {
    isOpen: aboutModalOpen,
    onOpen: openAboutModal,
    onClose: closeAboutModal,
  } = useDisclosure();
  const {
    isOpen: loginModalOpen,
    onOpen: openLoginModal,
    onClose: closeLoginModal,
  } = useDisclosure();
  const {
    isOpen: signupModalOpen,
    onOpen: openSignupModal,
    onClose: closeSignupModal,
  } = useDisclosure();

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
        <div className="buttons">
          <PrimaryButton text="About" handleClick={openAboutModal} />
          <PrimaryButton text="Log in" handleClick={openLoginModal} />
          <PrimaryButton text="Sign up" handleClick={openSignupModal} />
        </div>
      </div>
      <div className="main-content">
        <h1 className="title">GeoJourney</h1>
        <LargerButton className="play" text="Play" />
      </div>
      <div className="imgbox">
        <img
          src={background}
          alt="Background of road next to lake and mountains"
          className="center-fit"
        />
      </div>
      <AboutModal isOpen={aboutModalOpen} onClose={closeAboutModal} />
      <LoginModal isOpen={loginModalOpen} onClose={closeLoginModal} />
      <SignupModal isOpen={signupModalOpen} onClose={closeSignupModal} />
    </div>
  );
}

export default PublicHome;
