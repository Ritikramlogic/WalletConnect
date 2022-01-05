import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./style.css";
import { css } from "aphrodite";
import { styles } from "./SecondSection";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function FinalSection(props) {
  const [state, setState] = useState(false);
  return (
    <>
      <div
        className={css(styles.displayRight)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/section7.png"}
          className={css(styles.image)}
          alt="six"
        />
        <div>
          <ButtonGroup className={css(styles.button_group)}>
            {props.fourth ? (
              <button className="completedButton" />
            ) : (
              <>
                <button
                  className="pendingButton"
                  onClick={props.fourthClick}
                ></button>
                <FaLongArrowAltRight
                  color="white"
                  size={40}
                  className="fa-arrow-right"
                />
              </>
            )}
            <a href="https://t.me/BITChro" target="_blank">
              <Button
                style={{
                  borderRadius: "20px",
                  border: "2px solid white",
                }}
                onClick={props.followTelegram}
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/telegram.png"}
                  style={{ maxWidth: "13px", width: "100%" }}
                  alt="seventh"
                />
                <span className="mx-1" style={{ fontSize: "12px" }}>
                  Follow Group
                </span>
              </Button>
            </a>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            props.connect();
          }}
          style={{
            background:
              "linear-gradient( 120deg, rgb(203,1,255) 0%, rgb(0,255,87) 100%",
            maxWidth: "100px",
            textAlign: "center",
            borderRadius: "5px",
            padding: "10px 10px",
            cursor: "pointer",
            width: "100%",
            margin: "0 auto",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {props.checkConnect ? <> Disconnect </> : <> Connect </>}
        </div>

        <center
          onClick={
            props.counter == 2 ? (
              <>{alert("Please check all fields")}</>
            ) : (
              props.claimReward
            )
          }
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/claim-reward.png"}
            alt="yes"
            className={css(styles.image_mid)}
          />
        </center>
      </div>

      <hr style={{ border: "2px solid black", margin: "0px" }} />
    </>
  );
}
