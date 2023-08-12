import React from "react";
import {Link} from "react-router-dom";
import vendingMachineImg from "../assets/vendingMachineImg.png";
import Message from "./Message";
import "./VendingMachine.css";

function VendingMachine() {
    return (
        <div
            className="VendingMachine" >
            <div class="VendingMachine-image">
                <img src={vendingMachineImg} alt='Vending Machine' />
            </div>
            <Message>
                <h1>VENDING MACHINE</h1>
                <h2>Select your choices </h2>
            </Message>
            
            
            <Message>
                <h1><Link to="/soda">Soda</Link></h1>
                <h1><Link to="/Chips">Snacks</Link></h1>
                <h1><Link to="/iceCream">Ice Cream</Link></h1>
            </Message>
        </div>
    );
}

export default VendingMachine;