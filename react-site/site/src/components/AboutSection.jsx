import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              <h2>true</h2>
            </motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
