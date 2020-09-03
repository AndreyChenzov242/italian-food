import React from 'react';

// Components

import { ContentWidthLimiter } from '../../../components/ContentWidthLimiter';
import logo from '../../../assets/images/logo-sm-black.png';

import { ReactIcon } from '../../../components/ReactIcon';
import { FaInstagram } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { FiTwitter } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
// Styles

import './styles.scss';

// ----------------

export const FooterSection = () => {
  return (
    <footer className="footer">
      <ContentWidthLimiter>
        <div className="footer__aside">
          <div className="footer__title">Italian food</div>
          <div className="footer__descr">
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
            eiusmod tempor incididunt ultimam quantum
          </div>
          <div className="social-wrapper">
            <a href="#">
              <ReactIcon size="xl" color="white">
                <FaInstagram />
              </ReactIcon>
            </a>
            <a href="#">
              <ReactIcon size="xl" color="white">
                <CgFacebook />
              </ReactIcon>
            </a>
            <a href="#">
              <ReactIcon size="xl" color="white">
                <FiTwitter />
              </ReactIcon>
            </a>
            <a href="#">
              <ReactIcon size="xl" color="white">
                <RiWhatsappLine />
              </ReactIcon>
            </a>
          </div>
        </div>
        <div className="footer__content-wrapper">
          <div className="footer__about">
            <div className="footer__title">About</div>
            <a href="#">History</a>
            <a href="#">Our Team</a>
            <a href="#">Brand Guidelines</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer__services">
            <div className="footer__title">Services</div>
            <a href="#"> How to Order</a>
            <a href="#">Our Product</a>
            <a href="#">Order Status</a>
            <a href="#">Promo</a>
            <a href="#">Payment Method</a>
          </div>
          <div className="footer__other">
            <div className="footer__title">Other</div>
            <a href="#">Contact Us</a>
            <a href="#">Help</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </ContentWidthLimiter>
    </footer>
  );
};
