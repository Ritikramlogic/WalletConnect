import React, { useEffect, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Iframe from "react-iframe-click";

import { FacebookProvider, Like } from "react-facebook";

import "./style.css";

import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import ReactFBLike from "react-fb-like";
import { id } from "ethers/lib/utils";
const delay = 5;
export default function FirstSection(props) {
  const styles = StyleSheet.create({
    heading: {
      fontStyle: "normal",
      fontWeight: "bolder",
      margin: "0px",
      fontSize: "89px",
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
        lineHeight: "28px",
        textAlign: "center",
        color: "#7879f1",
        fontFamily: "Franklin Gothic",
      },
    },
    heading2: {
      paddingBottom: "30px",
      marginTop: "20px",
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "28px",
      lineHeight: "27px",
      textAlign: "center",
      color: "rgb(8, 255, 33)",
      fontFamily: "Franklin Gothic",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        fontStyle: "normal",
        fontWeight: "bolder",
        marginTop: "20px",
        fontSize: "20px",
        lineHeight: "19px",
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

      alignItems: "center",
      marginLeft: "20px",
      marginRight: "20px",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        width: "100px",
        height: "100px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        textAlign: "center",
      },
    },
    display: {
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
    secondText: {
      fontSize: "28px",
      paddingBottom: "20px",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "12px",
        color: "white",
      },
    },
    section_each: {
      margin: "0px",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        margin: "0px",
      },
    },
    secondText: {
      fontSize: "28px",
      color: "white",
      textAlign: "center",
      fontWeight: "bolder",

      "@media (max-width: 567px)": {
        fontSize: "10px",
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "12px",
        color: "white",
      },
    },
    instruction: {
      color: "#27DC3A",
      textAlign: "left",
      fontWeight: "bold",
      padding: "20px",
      margin: "10px",
      border: "1px solid black",
      borderRadius: "15px",
      boxShadow: "0 0 6rem 0 rgba(0, 0, 0, 1)",
      height: "220px",
      overflow: "hidden",
      position: "relative",

      textTransform: "capitalize",
      maxWidth: "800px",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      "@media (max-width: 567px)": {
        maxWidth: "200px",
        width: "100%",
        fontSize: "10px",
      },
      "@media only screen and (max-width: 767px)": {
        maxWidth: "300px",
        width: "100%",
        fontSize: "12px",
        color: "white",
      },
    },
  });
  return (
    <>
      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <Section1Image
          imgURL={process.env.PUBLIC_URL + "assets/images/bgairdrop.jpg"}
        >
          <h1 className="animate-charcter">Welcome To BITChro Airdrop</h1>
          <p className={css(styles.secondText)}>
            {" "}
            You have to complete below mentioned tasks to claim 1000
            BITChro(BTCH) tokens in your wallet
          </p>
          <p className={css(styles.secondText)}>
            {" "}
            <span style={{ color: "red" }}>
              {" "}
              * All Task are mandatory to participate in BITChro (BTCH) AirDrop
              <center>
                <p className={css(styles.instruction)}>
                  1.)Complete all the 5 tasks.
                  <br />
                  2.) Click “Pending” options in every task segments, if you
                  have completed the Task.
                  <br />
                  3.)claim your 1000 BTCH coins .
                  <br />
                  Note- You need to connect your MetaMask or Trust wallet to
                  claim BTCH coins instantly in your wallet. Use BEP-20/BSC-20
                  wallet to receive the token.
                </p>
              </center>
            </span>
          </p>
        </Section1Image>

        <div className={css(styles.heading2)}>
          Task 1: Click the like button to like our facebook page
        </div>

        <div className={css(styles.display)}>
          {/* <BounceInDiv style={{width:"50%"}}> */}

          <img
            src={process.env.PUBLIC_URL + "assets/images/section2.png"}
            className={css(styles.image)}
            alt="footer"
          />

          {/* </BounceInDiv> */}
          <div className={css(styles.button_group)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {/* <Button
                style={{
                  borderRadius: "15px",
                  border: "2px solid white",
                  width: "100px",
                }}
                className="mx-2"
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/like.png"}
                  width={30}
                  alt="sidelogo"
                />
                <span className="mx-1">Like</span>
              </Button> */}

              <Iframe
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=button&action=like&size=large&height=35&appId=458498775678924"
                width="100"
                height="35"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                onInferredClick={props.likeFb}
              ></Iframe>

              {props.first ? (
                <button className="completedButton" />
              ) : (
                <>
                  <FaLongArrowAltLeft
                    color="white"
                    size={50}
                    className="fa-arrow-right"
                  />
                  <button
                    className="pendingButton"
                    onClick={props.firstClick}
                  ></button>
                </>
              )}
            </ButtonGroup>
          </div>
        </div>
      </section>
    </>
  );
}
const Section1Image = styled.div`
  max-width: 1900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 72px 0;
  opacity: 0.9;
  background-image: url(${(props) => props.imgURL});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 18px 40px rgb(51 51 51 / 80%);
  width: 100%;
  background-position: center;
  color: black;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s ease-out;
  @media (max-width: 500px) {
    max-width: 500px;
    width: 100%;
    background-size: cover;
  }
`;
