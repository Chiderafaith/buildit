import React from "react";
import styled from "styled-components";
import { device } from "./media";

function Card() {
    return(
     <div>
         <h1 className="h1">What Our Clients Say </h1>
          <CardD>
          <P>
            <p> ipsum dolor sit amet consectetur adipisicing elit. Autem,ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus! necessitatibus!</p>
             <h6 className="h1">John Deo</h6>
        </P>
        <P className="low">
            <p> ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!adipisicing elit. Autem, necessitatibus!</p>
            <h6 className="h1">Roland Smith</h6>
        </P>
        <P>
            <p> ipsum dolor sit ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!amet consectetur adipisicing elit. Autem, necessitatibus!</p>
             <h6 className="h1">Jason Mark</h6>
        </P>
        <P className="low">
            <p>ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus! ipsum dolor sit amet consectetur adipisicing elit. Autem, necessitatibus!</p>
             <h6 className="h1">Pavan Reddy</h6>
        </P>
          </CardD>
     </div>    
    )
}

export default Card;

const CardD = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1rem;


@media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0;
}

& .low {
    margin-top: 2rem;
}
`

const P = styled.div`
background-color: #282c34;
width: 300px;
height: 300px;
margin-left: 10%;
padding-top: 3rem;
border-radius: 10px;

@media ${device.laptop} {
    width: 220px;
    height: 300px;
    margin-left: 5%;

    p{
        line-height: 1rem;
    }

    h6 {
        font-size: 2rem;
    }
}

@media ${device.laptopM} {
    width: 280px;
    height: 300px;
    margin-left: 5%;
}

p {
    line-height: 2rem;
}
`