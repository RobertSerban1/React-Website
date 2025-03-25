import React from "react";
import gym from "../img/gym.jpg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Unleash the <span>unstoppable </span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>whale inside </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Train with purpose. Join a community that pushes you forward.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={gym}
          alt="gym boy"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
