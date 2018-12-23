import React from "react";
import "./Title.css";

const Title = props => 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        Clicky game
        <p>Score: {props.score}</p>
        <p>Top Score: {props.topscore}</p>
        <p>relleno: {props.diclick}</p>
        
    </nav>;

export default Title;


