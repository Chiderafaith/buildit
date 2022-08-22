import React from "react";
import { FaFolderOpen, FaComment, FaHeart, FaClock} from "react-icons/fa";
import styled from "styled-components";
import { device } from "./media";

function WhyUs() {
    return(
        <Div1>
            <div>
             <h1 className="h1">Why Choose Us?</h1>
             <p>the top-notch quality construction from the first to the final brick.</p> 
            </div>
            <Div3>
                <Div2>
                   <FaFolderOpen color="#DF7861" size={70} />
                   <h4>Assured Quality Control</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!</p>
                </Div2> 
                <Div2>
                   <FaComment color="#DF7861" size={70}/>
                   <h4>Safe Money Transaction</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!</p>
                </Div2>
                <Div2>
                   <FaHeart color="#DF7861" size={70}/>
                   <h4>Absolute Transparency</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!</p>
                </Div2>
                <Div2>
                   <FaClock color="#DF7861" size={70}/>
                   <h4>On Time Delivery</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!</p>
                </Div2>
            </Div3>
        </Div1>
    )
}

export default WhyUs;


const Div1 = styled.div`
text-align: center;
padding: 1rem 0 1rem 1rem; 


`
const Div3 =styled.div`
@media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 10px;  
} 
@media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px; 
}
`

const Div2 = styled.div`
border: white solid 2px;
border-radius: 10px;
padding: 1rem;
margin: 2rem;
height: 300px;
width: 300px;

@media ${device.mobileL} {
    margin:  2rem 5rem;
}

@media ${device.tablet} {
    margin: 2rem 2rem;
}

@media ${device.laptop} {
    margin: 20px;
    width: 200px;
    height: 300px;
}

@media ${device.laptopM} {
    width: 250px;
    height: 300px;
}

`