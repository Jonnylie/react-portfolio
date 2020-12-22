import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, MoreInfo } from './FooterElements'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            𝑱𝑳
                        </SocialLogo>
                        <WebsiteRights>Jonny Lie © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <MoreInfo> <FiMail style={{ fontSize: '20px' }} /> <span style={{ marginLeft: '10px' }}>jonnylie1998@gmail.com</span></MoreInfo>
                        <SocialIcons>
                            <SocialIconLink to={{ pathname: "https://www.linkedin.com/in/jonny-lie/" }} target='_blank'
                                aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink to={{ pathname: "https://github.com/Jonnylie" }} target='_blank'
                                aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink to={{ pathname: "https://www.facebook.com/jonny.lie.92/" }} target='_blank'
                                aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink to={{ pathname: "mailto:jonnylie1998@gmail.com" }} target='_blank'
                                aria-label='Email'>
                                <FiMail />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
