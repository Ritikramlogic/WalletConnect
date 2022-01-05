import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";

import TeamCompo from "../Team/TeamCompo";
import TechComponent from "./TechComponent";
export default class Technology extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container
            style={{
              width: "100%",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "assets/images/bg.png"
              })`,
              backgroundPosition: "right",
              backgroundSize: "cover",
              backgroundColor: "black",
              padding: "72px 0",
            }}
          >
            <Logo src={process.env.PUBLIC_URL + "assets/img/Technology.svg"} />
            <ContainerImages>
              <TeamWrapper
                data-aos="zoom-in-right"
                data-aos-delay="50"
                data-aos-duration="3000"
              >
                <TechComponent
                  img={
                    process.env.PUBLIC_URL +
                    "/assets/Technology/binacechain.png"
                  }
                />
                <TechComponent
                  img={
                    process.env.PUBLIC_URL + "/assets/Technology/poladot.svg"
                  }
                  chain
                />
                <TechComponent
                  img={process.env.PUBLIC_URL + "/assets/Technology/heco.svg"}
                />
                <TechComponent
                  img={
                    process.env.PUBLIC_URL + "/assets/Technology/solanalogo.svg"
                  }
                />
                <TechComponent
                  img={
                    process.env.PUBLIC_URL + "/assets/Technology/maticlogo.png"
                  }
                />
                <TechComponent
                  img={
                    process.env.PUBLIC_URL +
                    "/assets/Technology/ethereum-final.svg"
                  }
                />
                <TechComponent
                  img={process.env.PUBLIC_URL + "/assets/Technology/tron.png"}
                />
                <TechComponent
                  img={
                    process.env.PUBLIC_URL +
                    "/assets/Technology/cardanologo.png"
                  }
                />
              </TeamWrapper>
            </ContainerImages>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: white;
  background-color: white;
  color: white;
`;
const Container = styled.a`
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  color: white;
  text-decoration: none;
  padding: 72px;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContainerImages = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Logo = styled.img`
  max-width: 700px;
  margin: 2rem 0;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const Logo2 = styled.img`
  max-width: 1000px;
  margin: 2rem 0;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const TeamWrapper = styled.div`
  max-width: 1000px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;
  align-items: self-end;
  margin: 40px;
  @media (max-width: 1024px) {
    justify-content: center;
    alignitems: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media (max-width: 425px) {
    justify-content: center;
    alignitems: center;
    flex-wrap: wrap;
    width: 300px;
  }
`;
