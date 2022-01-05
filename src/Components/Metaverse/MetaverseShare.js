import React, { Component } from "react";
import styled from "styled-components";
export default class Subscribe extends Component {
  render() {
    return (
      <>
        <Wrapper
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
          <SubscribeLogo
            width="100%"
            src={process.env.PUBLIC_URL + "assets/img/metaverse.svg"}
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
          />
          <Container
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <SubscribeContent>
              <ul style={{ textAlign: "left" }}>
                <li>Metaverse is a sci-fi concept.</li>
                <li>It's merely a dream right now.</li>
                <li>
                  Facebook Like companies are working to make it setting for few
                  online sports.
                </li>
                <li>
                  BTCH coin can be used to purchase virtual land and other
                  digital items on BIT_Chro platform in near future
                </li>
              </ul>
            </SubscribeContent>
            <SubscribeContent>
              <SubscribeLogo
                width="100%"
                src={process.env.PUBLIC_URL + "assets/images/section5.png"}
              />
            </SubscribeContent>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background-color: #000;
  padding-top: 8rem;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 72px;

  align-items: center;
  @media (max-width: 768px) {
    max-width: 532px;
    flex-direction: column;
  }
`;
const SubscribeLogo = styled.img`
  margin: 2rem 0;
  max-width: 800px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const SubscribeContent = styled.div`
  color: white;
  font-size: 20px;

  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
