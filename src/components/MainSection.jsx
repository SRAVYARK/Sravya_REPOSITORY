import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { motion } from 'framer-motion';

function MainSection() {
    return (
      <section className="main" id="main">
        <div id="abt">
          <h2>Hi, Myself SRAVYA <br /><span>Professional Trainee</span></h2>
          <h4>I’m currently working as a Trainee Intern at Neo Technology </h4>
      
          <div className="social-icons">
                <a href="https://github.com/SRAVYARK" target="_blank" rel="noopener noreferrer">
                <FaSquareGithub/>

                </a>
                <a href="https://www.linkedin.com/in/sravya-pallem/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>
            </div>
          </div>
      </section>
    );
  }
  
  export default MainSection;
  