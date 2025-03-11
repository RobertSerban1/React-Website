import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="icon" />
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
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* Adaugă spațiu între elemente */

  @media (max-width: 1500px) {
    justify-content: space-between;
  }
`;

const Card = styled.div`
  flex: 1 1 calc(50% - 2rem); /* 50% din container, cu spațiu între ele */
  max-width: 400px; /* Evită extinderea pe ecrane mari */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Pe ecrane mici, 1 pe rând */
  }
`;

export default ServicesSection;
