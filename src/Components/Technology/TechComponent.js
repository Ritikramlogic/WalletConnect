import React from "react";
import "./tech.css";
export default function TechComponent(props) {
  return (
    <div className="flexClass">
      <div>
        <img src={props.img} width={250} />
      </div>
    </div>
  );
}
