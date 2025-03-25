import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import lifting from "../img/lifting.jpg";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          Train <span>smarter</span>, not just <span>harder</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>24/7 Access</h3>
            </div>
            <p>Train on your own time, whenever it works best for you.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Expert Trainers</h3>
            </div>
            <p>Get guidance from certified coaches and fitness pros.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Strength Zone</h3>
            </div>
            <p>A dedicated area for heavy lifting and power training.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable Plans</h3>
            </div>
            <p>Get the results without breaking the bank.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={lifting} alt="home2" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;

  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1500px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex: 1 1 20rem;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h3 {
      margin: 0;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 5px;
      font-size: 1.2rem;
    }
  }

  p {
    margin-top: 1rem;
    color: #ccc;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export default ServicesSection;
