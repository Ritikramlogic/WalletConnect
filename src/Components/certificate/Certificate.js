import React from "react";
import "./certificate.css";
export default function Certificate() {
  return (
    <div
      className="containerClass"
      style={{
        width: "100%",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "assets/images/bg.png"
        })`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",

        padding: "72px",
      }}
    >
      <div
      
        style={{ textDecoration: "none", fontSize: "24px", color: "white" }}
      >
        <div>
          <img
            src={process.env.PUBLIC_URL + "assets/img/textcertificate.svg"}
            className="imageLogo"
          />
          <p style={{ marginTop: "30px", fontSize: "20px" }}>
            BIT_Chro now officially Registered in the Company house of UK as
            BITChro Metaverse Limited.
            <br />  To know more <a href="https://find-and-update.company-information.service.gov.uk/company/13765689" target="_blank">Click Here.</a>
          </p>
        </div>
        <div className="imageFlex">
          <div>
            <img
              src={
                process.env.PUBLIC_URL +
                "assets/images/certificateframefinal.jpg"
              }
              className="imageOne"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "assets/img/btclogo.svg"}
              className="imageMid"
            />
          </div>

          <div>
            <img
              src={process.env.PUBLIC_URL + "assets/img/handshake.svg"}
              className="imageMid"
            />
          </div>

          <div>
            <img
              src={
                process.env.PUBLIC_URL + " assets/images/logocertificate.png"
              }
              className="imageTwo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
