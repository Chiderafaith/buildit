import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import "../App.css";
import Navigationbar from "./nav";
import { device } from "./media";


function Home() {
    return(
        <HomePage className = "homeb">
            <Navigationbar />
            <hr></hr>
            <Div1>
                <h1 className="left">Best Construction & Renovation Company In Lagos</h1>
                <p className="left">Build Construction is one among the best construction companies in Lagos. the goal is to provide a professional touch to construction.</p> <br/>                
                <Link to="/info"><Button>Let's Build</Button></Link>
            </Div1>
        </HomePage>
    )
}


export default Home;

const HomePage = styled.div`
width: 100%;
height: 100%;
`

const Div1 = styled.div`
text-align: center;
padding-bottom: 3rem;
padding-left: 10px;

@media ${device.laptop} {
    margin-right: 60%;  
}

@media ${device.tablet} {
    margin-right: 20%;  
}

@media ${device.mobileL} {
    text-align: left;  
    padding-left: 30px;
}

@media ${device.laptopM}
color: blue;
h1 {
    margin: 5rem 0 2rem 0;
}
`

const Button = styled.button`
color: white;
background-color: brown;
padding: 10px;
border-radius: 5px;
`