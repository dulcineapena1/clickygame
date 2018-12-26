import React from "react";
import "./Title.css";

const Title = props => 
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        
        <p>{props.mensajeNoAcerto}</p>
        <p>Score: {props.score}</p>
        <p>Top Score: {props.topscore}</p>
        
        {/* <p>relleno: {props.diclick}</p>    Con esto puedo saber a que id le doy click en app.js*/}
        
    </nav>;

export default Title;


