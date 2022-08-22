import React from "react";
import styled from "styled-components";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { device } from "./media";

function CarouselR() {
    return(
        <div>
          <h1 className="h1">What Our Clients Say </h1>
          <div>
             <Carousel>
               <Carousel.Item interval = {1500}> 
                    <P>
                      <p> ipsum dolor sit amet consectetur adipisicing elit. Autem,ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus! necessitatibus!</p>
                      <h6 className="h1">John Deo</h6>
                    </P>
                </Carousel.Item>
               <Carousel.Item interval = {1500}> 
                   <P>
                     <p> ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!adipisicing elit. Autem, necessitatibus!</p>
                     <h6 className="h1">Roland Smith</h6>
                   </P>
               </Carousel.Item>
               <Carousel.Item interval = {1500}>
                   <P>
                     <p> ipsum dolor sit ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!amet consectetur adipisicing elit. Autem, necessitatibus!</p>
                     <h6 className="h1">Jason Mark</h6>
                   </P>
                </Carousel.Item>
               <Carousel.Item interval = {1500}> 
                 <P>
                    <p>ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus! ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!</p>
                    <h6 className="h1">Pavan Reddy</h6>
                 </P>
               </Carousel.Item>
             </Carousel>  
          </div>       
       </div>
    )
}

export default CarouselR;

const P = styled.div`
background-color: #282c34;
width: 300px;
height: 300px;
margin-left: 12%;
padding-top: 3rem;
border-radius: 10px;

p {
    line-height: 2rem;
}

@media ${device.mobileL} {
margin-left: 18%;
}
`