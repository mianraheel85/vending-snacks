import React  from "react";
import {Link} from "react-router-dom";
import sodaImg from "../assets/sodaImg.png";
import Message from "./Message";
import "./soda.css";

function Soda() {
    return (
        <div
        className="Soda">
            <img src={sodaImg} alt ='coca cola can' />
            <Message>
                <h1> Soda $3 </h1>
                <h1><Link to="/">Go Back </Link></h1>
            </Message>
        </div> 
    );
} 


export default Soda;