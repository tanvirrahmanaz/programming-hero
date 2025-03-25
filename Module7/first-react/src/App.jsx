import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./Todo";
import Counter from "./count"; // Corrected 
//import
import Users from "./users";

function App() {
    return (
        <>
            <h1>Hello vai brother</h1>
            <Person />
            
            <Developer name="tanvir" tech="python" />
           
            <ToDo tasks="learn_react" isDone={true} />
            <ToDo tasks="Revise JS" isDone={false} />
            <ToDo tasks="take a Shower" isDone={false} />
            <Counter /> {/* Fixed component usage */}

            <Users></Users>

            <Suspense fallback={<h2>Loading...</h2>}></Suspense>
        </>
    );
}

function Person() {
    return (
        <div className="person">
            <h1>I am a person</h1>
            <p>You are great!</p>
        </div>
    );
}

function Developer(props) {
    return (
        <div style={{ border: "2px solid red", borderRadius: "20px" }}>
            <h3>Developer: {props.name}</h3>
            <p>Technology: {props.tech}</p>
        </div>
    );
}

export default App;
