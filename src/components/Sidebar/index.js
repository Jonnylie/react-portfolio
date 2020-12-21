import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarRoute, SideBtnWrap, SidebarLink, SidebarLink2, NavItem2, NavIconLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        about
                    </SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>
                        portfolio
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        contact
                    </SidebarLink>
                    <SidebarLink2>
                        <NavItem2>
                            <NavIconLink to={{ pathname: "https://github.com/Jonnylie" }} target="_blank" >
                                <AiFillGithub />
                            </NavIconLink>
                        </NavItem2>
                        <NavItem2>
                            <NavIconLink to={{ pathname: "https://www.linkedin.com/in/jonny-lie/" }} target="_blank" >
                                <AiFillLinkedin />
                            </NavIconLink>
                        </NavItem2>
                    </SidebarLink2>
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
