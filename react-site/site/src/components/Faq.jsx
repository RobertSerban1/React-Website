import React from "react";
import styled from "styled-components";
import { About } from "../styles.jsx";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            tempora.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            similique?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            tempora.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            similique?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            tempora.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            similique?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products do you offer</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            tempora.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            similique?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
