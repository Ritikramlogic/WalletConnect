import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";

import "./team.css";
import TeamCompo from "./TeamCompo";
export default class Team extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container
            id="Team"
            style={{
              width: "100%",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "assets/images/bg.png"
              })`,
              backgroundPosition: "right",
              backgroundSize: "cover",
              backgroundColor: "#000",
              padding: "72px 0",
            }}
          >
            <Logo src={process.env.PUBLIC_URL + "assets/img/Team.svg"} />
            <ContainerImages>
              <TeamWrapper
                data-aos="zoom-in-right"
                data-aos-delay="50"
                data-aos-duration="3000"
              >
                <TeamCompo
                  name="Salmon Cathol"
                  designation="Chief Executive Officer"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-01.svg"}
               
                />
                <TeamCompo
                  name="Wilhelm Carl"
                  designation="Business Manager"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-02.svg"}
      
                />
                <TeamCompo
                  name="Shota Shum"
                  designation="Marketing Head"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-03.svg"}

                />
                <TeamCompo
                  name="Herman Walter"
                  designation="Chief Technical Officer"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-04.svg"}
              
                />
                <TeamCompo
                  name="Akira Botan"
                  designation="Senior Manager"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-05.svg"}

                />
                <TeamCompo
                  name="Uyemura Akio"
                  designation="Senior Manager"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-06.svg"}
                />
                <TeamCompo
                  name="Steven John"
                  designation="Advisor"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-07.svg"}
                />
                <TeamCompo
                  name="Henry Max"
                  designation="Advisor"
                  img={process.env.PUBLIC_URL + "/assets/img/team/avatar-bitchro-08.svg"}
                />
              </TeamWrapper>
            </ContainerImages>
          </Container>
        </Wrapper>
        <Wrapper
          style={{
            width: "100%",
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "assets/images/bg.png"
            })`,
            backgroundPosition: "right",
            backgroundSize: "cover",

            padding: "72px 0",
          }}
        >
          <h1
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="3000"
          >
            <Logo
              src={process.env.PUBLIC_URL + "assets/img/bitchro-allocation.svg"}
            />
          </h1>
          <Logo2
            data-aos="zoom-in-right"
            data-aos-delay="50"
            data-aos-duration="3000"
            src={
              process.env.PUBLIC_URL + "assets/img/bitchro-allocate-final.svg"
            }
          />
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: black;
  color: white;
`;
const Container = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  text-decoration: none;
  padding: 72px;
  justify-content: center;
  text-align: center;
  :hover {
    background: black;
  }
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
  :hover {
    background: black;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Logo = styled.img`
  max-width: 500px;
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
