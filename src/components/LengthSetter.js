import "./LengthSetter.css";

function LengthSetter( {name, timer, setTimer} ) {

    function plus1() {
        if (timer[name] >= 60) return;

        setTimer({
            ...timer,
            [name]: timer[name] + 1,
            remainingTime: timer.mode === name ? (timer[name] + 1) * 60 * 1000 : timer.remainingTime
        });
    }

    function minus1() {
        if (timer[name] <= 1) return;

        setTimer({
            ...timer,
            [name]: timer[name] - 1,
            remainingTime: timer.mode === name ? (timer[name] - 1) * 60 * 1000 : timer.remainingTime
        });
    }

    return (
        <div className={timer.isRunning ? 'length-setter disabledbutton' : 'length-setter'}>
            <h2 id={name + '-label'}>{name + ' length'}</h2>
            <div className="lengthBox">
                <button id={name + '-decrement'} onClick={minus1}>-</button>
                <h2 id={name + '-length'}>{timer[name]}</h2>
                <button id={name + '-increment'} onClick={plus1}>+</button>
            </div>
        </div>
    );
}

export default LengthSetter;