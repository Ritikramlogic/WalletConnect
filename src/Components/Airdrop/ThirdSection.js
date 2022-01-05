import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./style.css";
import { StyleSheet, css } from "aphrodite";

import styled, { keyframes } from "styled-components";

import { styles } from "./SecondSection";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ThirdSection(props) {
  const textContent =
    "Invest in World's Most innovative %23NFT %26 %23Metaverse %23ICO of the Year.Join BIT_Chro  %23PrivateSale followed by %23publicSale.BIT_Chro(BTCH):next 1000x coin.%23PrivateSale price: 0.003 %23BUSD%23Exchange listing price will be 0.1 BUSD. %23Pancakeswap %23Probit %23kucoin www.bitchro.com";
  return (
    <>
      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className={css(styles.heading2)}>
          Task 4: Click the tweet button to tweet something about BITChro (BTCH)
          platfrom.
        </div>
        <div className={css(styles.display)}>
          <div className={css(styles.button_group)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {props.third ? (
                <button className="completedButton" />
              ) : (
                <>
                  <button
                    className="pendingButton"
                    onClick={props.thirdClick}
                  ></button>
                  <FaLongArrowAltRight
                    color="white"
                    size={50}
                    className="fa-arrow-right"
                  />
                </>
              )}
              <a
                class="twitter-share-button"
                href={`${
                  "https://twitter.com/intent/tweet?text=" + textContent
                }`}
                data-size="large"
                target="_blank"
              >
                <Button
                  style={{ borderRadius: "30px", border: "1px solid white" }}
                  onClick={props.shareTwitter}
                >
                  <img
                    className="mx-1"
                    src={process.env.PUBLIC_URL + "assets/images/twitter.png"}
                    width="20"
                    height="20"
                  />
                  Tweet
                </Button>
              </a>
              {/* <Button
                style={{ borderRadius: "15px", border: "2px solid white" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/twitter.png"}
                  width={30}
                  alt="fifth"
                />
                <span
                  style={{ fontStretch: "extra-condensed" }}
                  className="mx-1"
                >
                  Tweet
                </span>
              </Button> */}
            </ButtonGroup>
          </div>

          <img
            src={process.env.PUBLIC_URL + "assets/images/section3.png"}
            className={css(styles.image)}
            alt="sixth"
          />
        </div>
      </section>
      {/* <RainParticle/> */}
      <section className={css(styles.section_each)}>
        <div className={css(styles.heading2)}>
          Task 5: Join our telegram group to receive latest updates regarding
          our platform.
        </div>
      </section>
    </>
  );
}
