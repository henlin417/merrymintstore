import React from 'react';
import './style.css';
import { SocialIcon } from 'react-social-icons';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="wrap">
        &copy;{new Date().getFullYear()} Copyright MerrymintStore 
        <br/>
        <SocialIcon className="socialicon" url="https://twitter.com/MerryMint" />
        <SocialIcon className="socialicon" url="https://www.facebook.com/MerryMintStore/" />
        <SocialIcon className="socialicon" url="https://www.instagram.com/merryminnt/" />
      </div>
    </footer>
  );
}

export default Footer;