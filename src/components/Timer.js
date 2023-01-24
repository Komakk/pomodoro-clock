import "./Timer.css";


function Timer({ timer }) {

    let time = new Date(timer.remainingTime).toTimeString().match(/\d\d:(\d\d:\d\d)/)[1];
    
    if (timer.remainingTime === 60 * 60 *1000) time = '60:00';
    
    return (
        <div className="timer">
            <h2 id="timer-label">{timer.mode}</h2>
            <h1 id="time-left">{time}</h1>
        </div>
    );
}

export default Timer;