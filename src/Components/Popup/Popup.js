import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";

export const Popup = (props) => {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (localStorage.getItem("popup") == "yes") {
      setOpen(false);
    } else {
      localStorage.setItem("popup", "yes");
      setOpen(true);
    }
  }, []);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal}>
        <center>
          <h1>Welcome to Airdrop Feature</h1>
          <hr style={{ border: "2px solid black" }} />
          <p>
            It's Time to participate BITChro airdrop please follow few basic
            steps and claim the rewards. Do not missed the opportunity,hurry up
            because limited time period is left.
          </p>

          <Link to="/airdrop">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/claim-reward.png"}
              alt="yes"
              width="200"
            />
          </Link>
        </center>
      </Modal>
    </div>
  );
};
