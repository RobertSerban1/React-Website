import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles.jsx";
import Toggle from "./Toggle.jsx";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll.jsx";
import { scrollReveal } from "../animation.jsx";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              tempora.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, similique?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              tempora.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, similique?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              tempora.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, similique?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer">
          <div className="answer">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              tempora.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, similique?
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
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
