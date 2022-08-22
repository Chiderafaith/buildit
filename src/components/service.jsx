import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import "../App.css";
import { device } from "./media";

function Services() {
    return(
        <div>
            <h1 className="h1">Our Services</h1> 
            <p>Flawless construction powered by deep expertise</p>
            <Ser>
              <img src="./img/house1.jpg" alt="house"></img>
              <Indiv>
                  <h1 className="h1">Residential</h1>
                  <h6 className="h6"></h6>
                  <p>Right from the firstto the last brick of the building, we take care of every aspect to ensure smooth and timely delivery. </p>
                  <Link to="/info"><Button>Request</Button></Link>
              </Indiv>
            </Ser>
            <Ser>
              <img src="./img/commercial.jpg" alt="house"></img>
              <Indiv>
                  <h1 className="h1">Commercial</h1>
                  <h6 className="h6"></h6>
                  <p>Your commercial buildingis just a click away. Get end to end commercial building needs right from planning to the execution of the projects.</p>
                  <Link to="/info"><Button>Request</Button></Link>
              </Indiv>
            </Ser>
            <Ser>
              <img src="./img/deco1.jpg" alt="house"></img>
              <Indiv>
                  <h1 className="h1">Renovation</h1>
                  <h6 className="h6"></h6>
                  <p>Get your building renovation done at a price you'll fall for. Request for our service and get the best in class home renovation services.</p>
                  <Link to="/info"><Button>Request</Button></Link>
              </Indiv>
            </Ser>
        </div>
    )
}


export default Services;

const Ser = styled.div`
padding-bottom: 4rem;

img {
    width: 80%;
    height: 200px
}

@media ${device.tablet} {
     position: relative;
     img {
         width: 60%;
         height: 400px;
         margin-right: 40%;
        }
}
@media ${device.laptop} {
    position: relative;
   img {
      width: 80%;
      height: 400px;
      margin-right: 20%;
    }  
}
`
const Indiv = styled.div`
h6 {
    background-color: white;
    width: 25%;
    height: 2px;
    margin-left: 38%;
}
p {
    text-align: left;
    width: 75%;
    margin-left: 3rem;
    padding-bottom: 10px;
}

@media ${device.tablet} {
    position: absolute;
    top: 8%;
    right: 20%;
    background-color: #282c34;
    width: 30%;
    padding-bottom: 2rem;
}

@media ${device.laptop} {
    position: absolute;
    top: 10%;
    right: 3%;
    background-color: #282c34;
    width: 30%;
    height: 300px;
    padding-bottom: 2rem;
}
`
const Button = styled.button`
color: white;
background-color: brown;
padding: 10px;
border-radius: 5px;
width: 70%;
font-size: 1rem;
`