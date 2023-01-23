import { useState } from "react";
import "./Timer.css";


function Timer({ timer }) {

    return (
        <div className="timer">
            <h1 id="timer-label">{timer.remainingTime}</h1>
        </div>
    );
}

export default Timer;