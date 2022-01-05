import React from "react";
import "./advantage.css";
export default function AdvantageCompo(props) {
  return (
    <div className="mainClass">
      <div className="flexContainer">
        <div className="flexLine">
          <div>
            <p className="textClass">{props.desc}</p>
          </div>
          <img src={props.img} width={100} />
        </div>
      </div>
    </div>
  );
}
