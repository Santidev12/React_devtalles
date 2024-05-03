import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
// import App  from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";
import './styles.css'


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={10} />
        {/* <FirstApp title='Hola Soy Vegetta'/> */}
    </React.StrictMode>
)