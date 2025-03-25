import React from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import pool from "../img/pool.jpg";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  sliderContainer,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  // Hook pentru "The Racer"
  const [element, controls] = useScroll();
  // Hook pentru "Good Times"
  const [element2, controls2] = useScroll();

  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* Slider de început */}
      <motion.div variants={sliderContainer} initial="hidden" animate="show">
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      {/* Prima secțiune - Athlete */}
      <Movie variants={fade} initial="hidden" animate="show">
        <motion.h2 variants={fade}>Force Area</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/force-area">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      {/* A doua secțiune - The Racer */}
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>Recovery Area</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/recovery-area">
          <Hide>
            <motion.img variants={photoAnim} src={pool} alt="pool" />
          </Hide>
        </Link>
      </Movie>

      {/* A treia secțiune - Good Times */}
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>Sports Nutrition</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/nutrition">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

// Exportăm corect ca default!
export default OurWork;

// 🎨 STILIZARE

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    text-align: center;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
