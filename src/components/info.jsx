import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navigationbar from "./nav";
import Contact from "./contact"
import {device} from "./media"
//import Pages from "./pages";


function Info() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();
     
    const navigateHome = () => {
        navigate('/')
    }


    const handleSubmit =(e) => {
        e.preventDefault();
        alert('Thank you ' + name + ". We will get in touch with you in no time!");
        setName('');
        setEmail('');
        setMessage('');
        setNumber('');
        navigateHome()
    }

    return(
        <Home>
            <Div1 className="infob">
                <Navigationbar />
                <hr></hr>
                <h1 className="h11">Construct Your<br></br>Dream Home</h1>
            </Div1>
            <Div2>
            <div className="down">
                <h1 className="h11">Got a plan?</h1>
                <h2>Come Build It With Us!</h2>
                <p>Turn your Dream into reality, build a home of your choice at the throw away price.</p>
            </div>
            <Div3>
                <h5 className="h5">For Construction</h5>
                <h5>09045635423</h5>
                <form onSubmit={handleSubmit}>
                    <input 
                    type= "text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)} 
                    value = {name}></input> <br></br>
                    <input type= "email" onChange={(e) => setEmail(e.target.value)}  value = {email} placeholder="Email"></input> <br></br>
                    <input type= "number" onChange={(e) => setNumber(e.target.value)}  value = {number} placeholder="Number"></input> <br></br>
                    <label for="plan">Do you have a plan?</label>
                    <select name="plan" id="plan">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                     <br></br>
                    <textarea onChange={(e) => setMessage(e.target.value)}  value = {message} placeholder="Massage"></textarea> <br></br>
                    <input type= "submit" placeholder="submit" className="button"></input>
                </form>
            </Div3>
            </Div2>
            <Contact />
        </Home>
    )
}

export default Info;

const Home = styled.div`
& .h11{
    color: #FF9F29;
    font-size: 60px;
}
`
const Div1 = styled.div`
br{
    height: 5px;
}
& .h11 {
    padding-top: 2rem;

    animation: 5s slide-down;

@keyframes slide-down {
    from{
        margin-top: -10%;
        height: 100%;
    }
    to{
        margin-top: 0%;
        height: 100%;
    }
}
}
`

const Div2 = styled.div`
background-color: white;
padding: 2rem 0;
color: black;

@media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;


    & .down{
        margin-top: 5rem;
    }
}
`

const Div3 = styled.div`
& .h5{
    color: #FF9F29;
}

form {
    display: block;

    input{
        margin: 5px;
        height: 3rem;
        width: 300px;
        border-radius: 10px;
    }

    select{
        margin: 5px;
        height: 2rem;
        width: 80px;
        border-radius: 10px;
    }

    textarea{
        margin: 5px;
        height: 200px;
        width: 300px;
        border-radius: 10px;
    }

    & .button{
        background-color: #FF9F29;
        color: white;
        font-weight: 20px;
    }
}
`