import React from "react";
import "./MemoryCards.css";

const MemoryCards = props => (
    
        <img className="images rounded border" id={props.id} onClick={props.handleBtnClick} alt={props.name} src={props.img} />
    
);

export default MemoryCards;