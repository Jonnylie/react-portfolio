import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavIconLink,
  NavItem2,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            𝑱𝑳
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About 🧑
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects 📚
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-180}
              >
                Contact ☎️
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu>
            <NavItem2>
              <NavIconLink
                to={{ pathname: "https://github.com/Jonnylie" }}
                target="_blank"
              >
                <AiFillGithub />
              </NavIconLink>
            </NavItem2>
            <NavItem2>
              <NavIconLink
                to={{ pathname: "https://www.linkedin.com/in/jonny-lie/" }}
                target="_blank"
              >
                <AiFillLinkedin />
              </NavIconLink>
            </NavItem2>
            <NavItem2>
              <NavIconLink
                to={{ pathname: "mailto:jonnylie1998@gmail.com" }}
                target="_blank"
              >
                <FiMail />
              </NavIconLink>
            </NavItem2>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
