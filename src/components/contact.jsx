import React from "react";
import { FaFacebookSquare, FaHouseUser, FaLinkedin, FaTwitterSquare, FaWhatsappSquare} from "react-icons/fa";
import { FaAddressCard, FaEnvelope, FaPhoneAlt,  FaUserAlt, FaBriefcase, } from "react-icons/fa";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { device } from "./media";

function Contact() {
    return(
        <Div1>
            <Div2>
               <img src="/img/logo.png" alt="log"></img>
                <h1> <span>BUILDIT</span> GROUP</h1>
            </Div2>
            <Div3>
            <Div4>
                <h6 className="h1">Useful Links</h6>
                <Link to="/home">
                  <FaHouseUser />  Home
                </Link>
                <Link to="/about">
                   <FaUserAlt /> About Us
                </Link>
                <Link to="/work">
                   <FaBriefcase /> Work
                </Link>
                <Link to="/info">
                   <FaAddressCard /> Contact Us
                </Link>
            </Div4>
            <div>
                <h6 className="h1">Contact Info</h6>
                <p><FaHouseUser /> Surulere Lagos</p>
                <p><FaPhoneAlt /> 09045635423, 08143426903</p>
                <p><FaEnvelope /> info@builditgroup.com</p>
            </div>
            <div>
                <h6 className="h1">Follow Us</h6>
                <FaFacebookSquare /> <FaWhatsappSquare /> <FaTwitterSquare /> <FaLinkedin />
            </div>
            </Div3>
        </Div1>
    )
}

export default Contact;

const Div1 = styled.div`
text-align: left;
padding-top: 2rem;


@media ${device.tablet} {
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-gap: 20px;
}
`

const Div2 = styled.div`
display: flex;
flex-direction: row;
margin-left: 15%;

img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 10px;

    @media ${device.tablet} {
       height: 100px; 
    }
}

span {
    color: #DF7861;
    display: block;
}

@media ${device.tablet} {
    margin-left: 10%;
}
`

const Div3 = styled.div`
h6{
    padding-left: 1.5rem;
    border-left: solid  #DF7861 4px;
    font-size: 20px;
    margin-top: 1rem;
}

@media ${device.mobileS} {
    margin: 2rem;
}

@media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
`

const Div4 = styled.div`
display: flex;
flex-direction: column;

Link{
    text-decoration: none;
    color: white;
}
`