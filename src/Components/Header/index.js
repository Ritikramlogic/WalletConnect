import React, { Component } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import AlertDismiss from "../Alert/AlertDismiss";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: false,
    };
    this.SidebarToogle = this.SidebarToogle.bind(this);
  }
  SidebarToogle() {
    this.setState({ toogle: !this.state.toogle });
  }
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <Logo to="/">
              <img
                src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
                alt="footer"
              />
            </Logo>
            <Hamburger onClick={this.SidebarToogle}>
              <GiHamburgerMenu size={30} />
            </Hamburger>

            {/*For Mobile Interface*/}
            <Sidebar
              toogleButton={this.SidebarToogle}
              too={this.state.toogle}
            />
            {/* For Desktop interface */}

            <NavWrapper>
              <NavLink to="/" show="true">
                Home
              </NavLink>
              <HashLink href="/#overview">Overview</HashLink>
              <HashLink href="/#works">How it Works</HashLink>
              <HashLink href="/#tokonomics">Tokenomics</HashLink>
              <HashLink href="/#roadmap">Roadmap</HashLink>
              <HashLink href="/#Team">Team</HashLink>
              <NavLink to="/whitepaper">Whitepaper</NavLink>
            </NavWrapper>
            <SocialWrapper>
              <SocialIcon href="https://twitter.com/bit_chro">
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/twitter.svg"}
                />
              </SocialIcon>
              <SocialIcon href="https://t.me/BITChro">
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/telegram.svg"}
                />
              </SocialIcon>
              <SocialIcon href="https://m.facebook.com/ChroBIT/?_rdr/">
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/facebook.svg"}
                />
              </SocialIcon>
            </SocialWrapper>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  height: 60px;
  background-color: #380936;
  color: #fff;
  z-index: 1000;
  position: relative;
  /* font-family: "FADAM"; */
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;
  height: 100%;
  justify-content: space-between;
`;
const Hamburger = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;
const Logo = styled(Link)`
  cursor: pointer;
`;
const NavWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin: 0 24px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const HashLink = styled.a`
  margin: 0 24px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const SocialWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const SocialIcon = styled.a`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

const SocialIconImg = styled.img`
  width: 32px;
`;
