import React  from "react";
import {Link} from "react-router-dom";
import creamImg from "../assets/creamImg.png";
import Message from "./Message";
import "./iceCream.css";


function IceCream() {
    return (
        <div
        className="iceCream">
        <img src={creamImg} alt ='Ice Cream' />

        <Message>
            <h1>Ice Cream Cone $4</h1>
            <h1><Link to ="/">Go Back</Link></h1>
           
        </Message>

        </div>
       
    );
} 
export default IceCream;