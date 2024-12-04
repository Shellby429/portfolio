import React from 'react';
import { Link } from 'react-router-dom';

import { arrow } from "../assets/icons";

const HomeInfo = ({currentStage}) => {
    if(currentStage ===1){
        return (
            <h1 className="sm:tet-xl sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                Hi I'm 
                <span className="font-semibold mx-2 text-white">Yaswant</span>
                👋
                <br /> A Software Emngineer from India
            </h1>
        );
    }
    if(currentStage ===2){
        return(
            <div className="info-box">
                <p className="font-medium sm:text-xl text-center">
                    I have done Freelancing in the domain of <br />UI/UX Design and picked up many skills along way
                </p>

                <Link to = "/about" className ="neo-brutalism-white neo-btn">
                    Learn More
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </div>
        );
    }
    if(currentStage === 3){
        return(
            <div className="info-box">
                <p className="font-medium sm:text-xl text-center">
                    I have done Freelancing <br />in the domain UI/UX Design and picked up many skills along way
                </p>

                <Link to = "/projects" className ="neo-brutalism-white neo-btn">
                    Visit my Portfolio
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </div>
        );
    }

    if(currentStage === 4){
        return(
            <div className="info-box">
                <p className="font-medium sm:text-xl text-center">
                    Need a project done or looking for a dev <br />I'm just a few keystrokes away
                </p>

                <Link to = "/contact" className ="neo-brutalism-white neo-btn">
                    Let's talk
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo