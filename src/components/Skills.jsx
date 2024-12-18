import React from "react";
import {FaHtml5,FaCss3Alt,FaJs,FaReact } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";


function Skills() {
    return (
        <section id="Skills">
            <h2 className="title">Skills</h2>
            <div className="Contact">
                <div className="card">
                    <div className="icon">
                        <FaHtml5  style={{color:'#ff5733'}}  />
                    </div>
                    <div className="info">
                        <h3  style={{color:'#ff5733'}}>HTML5</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaCss3Alt /> 
                    </div>
                    <div className="info">
                        <h3>CSS3</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaJs  style={{color:'#FFFF4D'}}  />
                    </div>
                    <div className="info">
                        <h3 style={{color:'#FFFF4D'}}>JS</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <TbBrandCSharp style={{color:'#1966d2'}} /> 
                    </div>
                    <div className="info">
                        <h3 style={{color:'#1966d2'}}>C#</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <DiMsqlServer style={{color:'#ec3232'}} /> 
                    </div>
                    <div className="info">
                        <h3 style={{color:'#ec3232'}}>SQL</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaReact style={{color:'#58C4DC'}} />
                    </div>
                    <div className="info">
                        <h3 style={{color:'#58C4DC'}}>REACT</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
