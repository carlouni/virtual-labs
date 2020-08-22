import ReactDOM from "react-dom";
import React from "react";
import VirtualLabs from "./components/VirtualLabs";

const wrapper = document.getElementById("apnic-virtual-labs");
wrapper ? ReactDOM.render(<VirtualLabs />, wrapper) : false;