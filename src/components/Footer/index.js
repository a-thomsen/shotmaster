import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElement';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/'>Sh*t explained</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Work with Sh*t</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle>Boring stuff</FooterLinkTitle>
                <FooterLink to='/'>Business Details</FooterLink>
                <FooterLink to='/'>History</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Submit</FooterLinkTitle>
                <FooterLink to='/'>Photography</FooterLink>
                <FooterLink to='/'>Video</FooterLink>
                <FooterLink to='/'>Website</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle>Help</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>FAQ</FooterLink>
                <FooterLink to='/'>Licensing</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>SH*T</SocialLogo>
            <WebsiteRights>SH*T © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
