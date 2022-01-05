import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import { StyleSheet, css } from "aphrodite";

import "./style.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FacebookIcon, FacebookShareButton } from "react-share";

export const styles = StyleSheet.create({
  heading: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "79px",
    lineHeight: "118px",
    textAlign: "center",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "29px",
      lineHeight: "18px",
      textAlign: "center",
      color: "#7879f1",
      fontFamily: "Franklin Gothic",
    },
  },
  heading2: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "28px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    color: "#08ff21",
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "16px",
      lineHeight: "15px",
      textAlign: "center",
      color: "#08ff21",
      fontFamily: "Franklin Gothic",
    },
  },
  image: {
    width: "20%",
    "@media (max-width: 567px)": {
      textAlign: "center",
      float: "center",
      width: "100%",
    },
    "@media only screen and (max-width: 767px)": {
      width: "80%",
      textAlign: "center",
    },
  },
  button_group: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "10px",
    "@media (max-width: 320px)": {
      margin: "0px",
    },
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      width: "100%",
      marginTop: "10px",

      textAlign: "center",
    },
  },
  display: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      marginTop: "10px",
      textAlign: "center",
    },
  },
  displayRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start !important",
    alignItems: "center",
    width: "100%",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      flexDirection: "column",
      textAlign: "center",
      width: "100%",
      marginTop: "10px",
      textAlign: "center",
    },
  },
  button_group2: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "80px",
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "80%",
      marginTop: "20px",
      textAlign: "center",
    },
  },
  section_each: {
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      margin: "10px",
    },
  },
  image_mid: {
    width: "20%",
    padding: "50px",
    cursor: "pointer",

    "@media only screen and (max-width: 767px)": {
      width: "60%",
    },
    "@media (max-width: 567px)": {
      textAlign: "center",
      width: "50%",
    },
  },
});
export default function SecondSection(props) {
  return (
    <>
      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className={css(styles.heading2)}>
          Task 2: Click the share button to share information regarding BITChro
          (BTCH) platform.
        </div>

        <div className={css(styles.display)}>
          <div className={css(styles.button_group)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {props.second ? (
                <button className="completedButton" />
              ) : (
                <>
                  <button
                    className="pendingButton"
                    onClick={props.secondClick}
                  ></button>
                  <FaLongArrowAltRight
                    color="white"
                    size={50}
                    className="fa-arrow-right"
                  />
                </>
              )}
              {/* <Button
                style={{ borderRadius: "15px", border: "2px solid white" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/share.png"}
                  width={30}
                  alt="secondimage"
                />
                Share
              </Button> */}

              <FacebookShareButton
                url={"https://www.bitchro.com/"}
                quote={
                  "Invest in World's Most innovative #NFT & #Metaverse #ICO of the Year.Join BIT_Chro #PrivateSale followed by #publicSale.BIT_Chro(BTCH):next 1000x coin.#PrivateSale price: 0.003 #BUSD#Exchange listing price will be 0.1 BUSD. #Pancakeswap #Probit #kucoin http://bitchro.com"
                }
                hashtag={
                  "#NFT #Metaverse#ICO#PublicSale#PrivateSale#BUSD#Exchange#Pancakeswap#Probit#kucoin"
                }
                className="Demo__some-network__share-button"
                onClick={props.shareFb}
                target="_blank"
              >
                <FacebookIcon size={42} round className="mx-1" />
                <span style={{ color: "white" }}>Share</span>
              </FacebookShareButton>
            </ButtonGroup>
          </div>

          <img
            src={process.env.PUBLIC_URL + "assets/images/section4.png"}
            className={css(styles.image)}
            alt="second"
          />
        </div>
      </section>

      {/* <RainParticle /> */}

      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className={css(styles.heading2)}>
          Task 3:Click the follow button to follow our twitter page.
        </div>

        <div className={css(styles.displayRight)}>
          <img
            src={process.env.PUBLIC_URL + "assets/images/section6.png"}
            alt="First"
            className={css(styles.image)}
          />
          <div className={css(styles.button_group2)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {props.second2 ? (
                <button className="completedButton" />
              ) : (
                <>
                  <button
                    className="pendingButton"
                    onClick={props.secondTwitter}
                  ></button>
                  <FaLongArrowAltRight
                    color="white"
                    size={50}
                    className="fa-arrow-right"
                  />
                </>
              )}
              <a
                class="twitter-follow-button"
                href="https://twitter.com/bit_chro"
                data-size="large"
                data-show-count="false"
                target="_blank"
              >
                <Button
                  style={{ borderRadius: "15px", border: "2px solid white" }}
                  onClick={props.followTwitter}
                >
                  <img
                    className="mx-1"
                    src={process.env.PUBLIC_URL + "assets/images/twitter.png"}
                    width={20}
                    alt="secondimage"
                  />
                  Follow
                </Button>
              </a>
            </ButtonGroup>
          </div>
        </div>
      </section>
    </>
  );
}
