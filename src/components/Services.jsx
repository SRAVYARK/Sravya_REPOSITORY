import React from "react";
import { FaCode ,FaDatabase   } from "react-icons/fa";
import {FaHtml5,FaCss3Alt,FaJs,FaPython,FaReact } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

function ServicesSection() {
    return (
        <section className="cards" id="Services">
            <h2 className="title">Services</h2>
            <div className="Contact">
                <div className="card">
                    <div className="icon">
                        <FaCode/>
                    </div>
                    <div className="info">
                        <h3>Front End 
                        <br/> <br/> <FaHtml5 style={{color:'#ff5733', fontSize:'35px'}} /> <FaCss3Alt style={{fontSize:'35px'}}/> <FaJs style={{color:'#FFFF4D', fontSize:'35px'}}/> <FaReact style={{color:'#58C4DC', fontSize:'35px'}}/>
                        </h3>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <FaCode/>
                    </div>
                    <div className="info">
                        <h3>Back End 
                            <br/> <br/> <FaPython style={{color:'#AEB2D5', fontSize:'35px'}}/> <TbBrandCSharp style={{color:'#1966d2', fontSize:'35px'}} /> 
                            </h3>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <FaDatabase />
                    </div>
                    <div className="info">
                        <h3>Database 
                            <br/> <br/> <DiMsqlServer style={{color:'#ec3232', fontSize:'35px'}} /> 
                             </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
