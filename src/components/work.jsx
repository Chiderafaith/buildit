import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { device } from "./media";

import "../App.css";

function Work() {
    return(
       <div>
          <h1 className = "h1">Our Latest Work</h1>
          <p>We have transformed plans to dream homes to the satisfaction of our clients.</p>
          <div>
             <Carousel>
               <Carousel.Item interval = {1500}>
                  <Img src="./img/house2.jpg"></Img>
                  <Carousel.Caption>
                     <p>one</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval = {1500}>
                  <Img src="./img/house3.jpg"></Img>
                  <Carousel.Caption>
                     <p>two</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval = {1500}>
                  <Img src="./img/deco2.jpg"></Img>
                  <Carousel.Caption>
                     <p>three</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval = {1500}>
                  <Img src="./img/house4.jpg"></Img>
                  <Carousel.Caption>
                     <p>four</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval = {1500}>
                  <Img src="./img/house5.jpg"></Img>
                  <Carousel.Caption>
                     <p>five</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item interval = {1500}>
                  <Img src="./img/deco1.jpg"></Img>
                  <Carousel.Caption>
                     <p>six</p>
                  </Carousel.Caption>
               </Carousel.Item>
             </Carousel>  
          </div>       
       </div>
    )
}

 export default Work;


 const Img = styled.img`
  width: 300px;
  height: 300px;


  @media ${device.tablet} {
    width: 400px;
    height: 400px; 
}
@media ${device.laptop} {
    width: 500px;
    height: 500px;
}
 `