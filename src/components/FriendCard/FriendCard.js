import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    {/* al dar click vas a ejecutar la prop.start y esta va a hacer uso del id para poder identificarla, por eso el id debe ser una prop */}
    <div className="img-container" onClick={() => props.start(props.id)}   >
      <img alt="" src={props.image} />
    </div>
   
  </div>
);

export default FriendCard;
