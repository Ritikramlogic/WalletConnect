import React, { useEffect, useState } from "react";
import Advanatges from "../Components/Advantages/Advantages";
import Brand from "../Components/Brands";
import FAQ from "../Components/FAQ";
import MetaverseShare from "../Components/Metaverse/MetaverseShare";
import Roadmap from "../Components/RoadMap";
import Section from "../Components/Sections";
import Subscribe from "../Components/Subscribe";
import Team from "../Components/Team";
import TokenNomics from "../Components/TokenNomics";

import Certificate from "../Components/certificate/Certificate";
import { Popup } from "../Components/Popup/Popup";
import { Alert } from "react-bootstrap";
import AlertDismiss from "../Components/Alert/AlertDismiss";
import Technology from "../Components/Technology/Technology";

export default function HomePage(props) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(true);
  }, [1]);
  console.log(props.popupToggle);
  return (
    <>
      <div>
        <Popup popupToggle={props.popupToggle} />
        <Section />
        <TokenNomics />
        <Technology />
        <Roadmap />
        <Team />
        <MetaverseShare />
        <Advanatges />
        <Subscribe />
        <FAQ />
      </div>
    </>
  );
}
