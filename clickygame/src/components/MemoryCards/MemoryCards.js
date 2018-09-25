import React from "react";
import "./MemoryCards.css";

const MemoryCards = props => (
    
        <img className="images" alt={props.name} src={props.img} />
    
);

export default MemoryCards;