import React  from "react";
import {Link} from "react-router-dom";
import chipsImg from "../assets/chipsImg.png";
import Message from "./Message";
import "./chips.css";

function Chips() {
    return (
        <div
        className="Chips">
             <img src={chipsImg} alt ='Lays Classic' />
       

        <Message>
            <h1>Lays Classic $2.00</h1>
            <h1><Link to ="/">Go Back</Link></h1>
        </Message>


        </div>
       
    );
} 


export default Chips;