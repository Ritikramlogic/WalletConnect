import React, { Component, useState } from "react";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import "./list.css";

export default function Footer(props) {
  const [open, setOpen] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
  };
  const onPolicyCloseModal = () => {
    setOpenPolicy(false);
  };

  return (
    <>
      <MainWrapper>
        <Modal open={open} onClose={onCloseModal}>
          <center>
            <h3 style={{ fontWeight: "bolder" }}>DISCLAIMER</h3>
          </center>
          <div>
            <p>
              To the greatest extent permitted by applicable laws, regulations,
              and rules, BITChro will not be liable for any indirect, special,
              incidental, consequential, or other losses of any kind, whether in
              tort, contract, or otherwise (including, but not limited to, loss
              of revenue, income, or profits). profits, and loss of use or
              data), arising from or in connection with any acceptance of or
              participation in You should not rely on this White Paper or any
              part of it.
              <br />
            </p>
            <p>
              The sole purpose (the “Purpose”) of this website and white paper
              (the “White Paper”) is to offer data at the BITChro Token The
              Draft White Paper and its contents do now no longer, and aren't
              meant to, constitute, or shape any element of, a proposal for
              sale, prospectus or invitation to subscribe for or buy Tokens, nor
              shall the Draft White Paper, or the reality of its distribution,
              shape the premise of or be relied upon in reference to any
              agreement or dedication to accumulate one of these Tokens. Before
              buying Tokens, ability clients are strongly recommended to take
              expert advice. No illustration or assurance is given as to the
              data contained within the Draft White Paper which has now no
              longer been verified, and no reliance need to be positioned upon
              such data.
            </p>
          </div>
        </Modal>
        <Modal open={openPolicy} onClose={onPolicyCloseModal}>
          <div>
            <h3>BITChro Privacy Policy</h3>
            <h5>
              Herein is provided the privacy policy of BITChro (owner and
              operator of BITChro.com) This Privacy Policy describes how
              BITChro.com will manage end user’s personal information which we
              collect as a result of your use of BITChro.com, your use of our
              websites located at https://BITChro.com and any pages or websites
              under the 'BITChro' brand including any tablet or mobile phone
              applications that are owned and/or operated by us or whenever we
              otherwise deal with you. BITChro is committed to ensuring that the
              personal information we collect about you is protected and is
              used, stored and disclosed in accordance with the Privacy Act and
              this Privacy Policy.
            </h5>
            <ol>
              <li>
                {" "}
                Website Use
                <p>
                  In using the website, you agree to be bound by the terms of
                  this Privacy Policy. BITChro.com may review the Privacy Policy
                  periodically and reserves the right to change the Privacy
                  Policy at any time at its discretion by posting such changes
                  on the website. Changes will be effective immediately when
                  posted on the website. The end users’ continued use of the
                  website following posting will constitute your acceptance of
                  those changes. This Privacy Policy will not apply to websites
                  which are linked to the website and over which BITChro.com has
                  no control.
                </p>
              </li>
              <li>
                Personal Information
                <p>
                  The kinds of Personal Information that BITChro.com may collect
                  from you is: - Name Email address Personally submitted
                  preferences Location data IP address
                </p>
              </li>
              <li>
                Collection Purposes
                <p>
                  BITChro.com will collect your Personal Information only by
                  lawful and fair means and not in an intrusive way to operate
                  its Service, and to provide you with the following
                  information:
                  <li>
                    If you wish to subscribe to BITChro.com's weekly newsletter
                    or other marketing communications.
                  </li>
                  <li>To update you on technical progress of BITChro.</li>
                  <li>To provide services to you as a User.</li>
                  <li>To maintain your User account.</li>
                  <li>
                    Direct Marketing and Opting Out
                    <p>
                      Occasionally we may use your Personal Information to
                      inform you about BITChro.com's products or services or
                      about promotional activities which BITChro.com believes
                      may be of interest or of benefit to you. We may do this
                      via email, SMS, telephone or mail. If you no longer wish
                      to receive marketing or promotional material from
                      BITChro.com at all or in any particular form, you may
                      contact us at any time by email to support@BITChro.com
                      with your request with which we will comply as soon as is
                      practical.
                    </p>
                  </li>
                  <li>
                    Management of your Personal Information
                    <p>
                      BITChro.com will take all reasonable steps to ensure that
                      the Personal Information which it collects, uses or
                      discloses is correct and is stored in a secure environment
                      which is accessed only by authorised persons. BITChro.com
                      will destroy or permanently de-identify the Personal
                      Information we hold when it is no longer required for any
                      purpose permitted under the APPs including our legal or
                      operational obligations.
                    </p>
                  </li>
                  <li>
                    Security of Personal Information
                    <p>
                      You acknowledge that no data transmission over the
                      Internet is totally secure. Accordingly, BITChro.com does
                      not warrant the security of any information which you
                      transmit to it. Any information which you transmit to
                      BITChro.com is transmitted at your own risk. However, once
                      BITChro.com receives your transmission, BITChro.com will
                      take reasonable steps to protect your Personal Information
                      from misuse, loss and unauthorised access, modification
                      and disclosure including by using password protected
                      systems and databases and Secure Socket Layer (SSL)
                      technology. BITChro.com’s employees, agents and
                      contractors are required to maintain the confidentiality
                      of Users’ Personal Information and trading behaviour.
                      Information posted on bulletin boards or communicated
                      within a social media environment (for example, Facebook,
                      Twitter, Chat Rooms) becomes public information.
                      BITChro.com cannot guarantee the security of this type of
                      disclosed information. We take seriously the
                      responsibility to exclude children from access to our
                      services. We will not accept their information for the
                      purposes of accessing or using the Service. It is however,
                      ultimately the responsibility of parents or guardians to
                      monitor their children’s Internet activities including
                      where appropriate by using Internet screening software.
                      Remember to always log out of your account when you have
                      completed your time on the website. This is particularly
                      important if you share a computer with another person. You
                      are responsible for the security of and access to your own
                      computer, mobile device or any other handset used to
                      access the website. Ultimately, you are solely responsible
                      for maintaining the secrecy of your username, password and
                      any account information. Please be careful whenever using
                      the Internet and our website.
                    </p>
                  </li>
                </p>
              </li>
              <li>
                Access to Personal Information
                <p>
                  You may access the Personal Information collected by
                  BITChro.com by contacting us at support@BITChro.com. We will
                  give you access to your Personal Information in the manner
                  requested if that is possible and within a reasonable period.
                  If we refuse your request or cannot give you access in the
                  manner you have requested, we will do what we can to meet your
                  requirements by other means. We may not be required to give
                  you access to your Personal Information in certain
                  circumstances which are set out in the APPs including where it
                  may have an unreasonable impact on other individual's privacy.
                  If we refuse access for such reasons, we will advise you in
                  writing of the refusal and our reasons and the complaint
                  mechanisms available to you.
                </p>
              </li>
              <li>
                Use of Website
                <p>
                  By using this website, you agree to BITChro.com collecting and
                  processing your Personal Information on the basis explained in
                  this Privacy Policy.
                </p>
              </li>
              <li>
                Contact Details
                <p>
                  If you have any queries, requests for access or correction or
                  complaints relating to the handling of your personal
                  information, please contact us by email. support@BITChro.com
                </p>
              </li>
            </ol>
          </div>
        </Modal>
        <Wrapper>
          <center>
            <img
              src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
              alt="footer"
            />
          </center>
          <Container>
            <Logo>
              <SocialWrapper>
                <SocialIcon href="https://twitter.com/bit_chro">
                  <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/twitter.svg"}
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon href="https://t.me/BITChro">
                  <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/telegram.svg"}
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon href="https://m.facebook.com/ChroBIT/?_rdr/">
                  <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/facebook.svg"}
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon
                  href="https://bscscan.com/token/0x881c3f97d994f7ba6b8a2d5488f32ed9ab15e502"
                  target="_blank"
                >
                <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/logobscscan.png"}
                    width="70"
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon
                  href="https://github.com/Bitchro/Bitchro"
                  target="_blank"
                >
                  <SocialIconImg
                    style={{
                      backgroundColor: "white",
                      borderRadius: "999px",
                    }}
                    src={process.env.PUBLIC_URL + "assets/img/git.png"}
                    width="70"
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon href="https://medium.com/@BITChro" target="_blank">
                  <SocialIconImg
                    style={{
                      backgroundColor: "white",
                      borderRadius: "999px",
                    }}
                    src="http://cdn.onlinewebfonts.com/svg/img_256332.png"
                    width="70"
                    alt="footer"
                  />
                </SocialIcon>
              </SocialWrapper>
              <SocialIconImgSet>
                Reach US
                <FooterLinks href="">finance@BITChro.com</FooterLinks>
              </SocialIconImgSet>
              <SocialIconImgSet>
                <FooterLinks href="">support@BITChro.com</FooterLinks>
              </SocialIconImgSet>
            </Logo>

            <FooterLinksWrapper>
              <FooterLinksContainer>
                <FooterLinks href="#">Home</FooterLinks>
                <FooterLinks href="#overview">Overview</FooterLinks>
                <FooterLinks href="#works">How it Works</FooterLinks>
              </FooterLinksContainer>
              <FooterLinksContainer>
                <FooterLinks href="#tokonomics">Tokenomics</FooterLinks>
                <FooterLinks href="#roadmap">Roadmap</FooterLinks>
                <FooterLinks href="#Team">Team</FooterLinks>
              </FooterLinksContainer>
            </FooterLinksWrapper>
            <Container>
              <FooterDescContainer>
                <FooterLinksButton
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  DISCLAIMER
                </FooterLinksButton>
              </FooterDescContainer>
              <FooterDescContainer>
                <FooterLinksButton
                  onClick={() => {
                    setOpenPolicy(true);
                  }}
                >
                  Privacy Policy
                </FooterLinksButton>
              </FooterDescContainer>
            </Container>
          </Container>
        </Wrapper>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  color: #fff;

  background: linear-gradient(
    120deg,
    rgb(203, 1, 255) 0%,
    rgb(0, 255, 87) 100%
  );
  padding-top: 1px;
`;
const Wrapper = styled.div`
  background-color: #000;
  padding-top: 20px;
`;
const Container = styled.div`
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-between;
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 0;
  flex-wrap: wrap;
  @media (max-width: 728px) {
    align-items: center;
    justify-content: center;
    padding-right: 0;
  }
`;
const ContainerFoot = styled.div`
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-around;
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  marginleft: 20px;
  padding: 32px 0;
  flex-wrap: wrap;
  @media (max-width: 728px) {
    align-items: center;
    padding-right: 0;
  }
`;
const Logo = styled.div`
  cursor: pointer;
`;
const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 0 20px;
`;
const FooterDescContainer = styled.div`
  display: flex;
  border: 2px solid white;
  margin-left: 10px;
  padding: 7 + px;
  flex-direction: row;
  text-align: start;
`;
const FooterLinksWrapper = styled.div`
  display: flex;
`;

const FooterLinks = styled.a`
  display: flex;
  margin: 0 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;
const FooterLinksButton = styled.button`
  display: flex;

  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  text-decoration: none;
`;
const SocialWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const SocialIcon = styled.a`
  margin: 0 10px;
  cursor: pointer;
  color: white;
  text-direction: none;
`;

const SocialIconImg = styled.img`
  max-width: 24px;
`;
const SocialIconImgSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margintop: 10px;
`;

const SocialWrapperIn = styled.div`
  display: flex;
  flex-direction: column;
`;
