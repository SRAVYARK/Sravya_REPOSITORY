import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer" id="Contact">
          
            <div className="contact-info">
            <p>Email: <a href="mailto:sravya2721@gmail.com">sravya2721@gmail.com</a></p>
            <p>Phone: <a href="tel:+91 9014725281">+91 9014725281</a></p>

            </div>
      
        
            <p className="footer-title">
            &copy;<span>SRAVYA </span>{new Date().getFullYear()}
            </p>
           
            <div className="social-icons">
                
                <a
                    href="https://github.com/SRAVYARK"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaSquareGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/sravya-pallem/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                
            </div>
        </footer>
    );
}

export default Footer;
