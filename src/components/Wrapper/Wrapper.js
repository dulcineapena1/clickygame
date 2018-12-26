import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div style={props.style} className="wrapper">{props.children}</div>;

export default Wrapper;
// className="wrapper"