import "./Timer.css";


function Timer({ timer }) {

    const time = new Date(timer.remainingTime).toTimeString().match(/\d\d:(\d\d:\d\d)/)[1];

    return (
        <div className="timer">
            <h2 id="timer-label">{timer.mode}</h2>
            <h1 id="time-left">{time}</h1>
        </div>
    );
}

export default Timer;