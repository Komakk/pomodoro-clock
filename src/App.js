import LengthSetter from "./components/LengthSetter";
import Wrapper from "./components/Wrapper";
import Timer from "./components/Timer";
import Button from "./components/Button";
import { useState } from "react";
let interval;

function App() {
  const [timer, setTimer] = useState({
    break: 5,
    session: 10,
    remainingTime: 10,
    mode: 'session',
    isRunning: false,
  });

  
  function startTimer() {
    interval = setInterval(function() {
      setTimer(timer => {
        if (timer.remainingTime === 0) {
          return {
            ...timer,
            remainingTime: timer.mode === 'session' ? timer.break : timer.session,
            mode: timer.mode === 'session' ? 'break' : 'session'
          }
        }
        return {
          ...timer,
          remainingTime: timer.remainingTime - 1}
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
  }
  
  function startStopClickHandler() {
    setTimer({
      ...timer,
      isRunning: !timer.isRunning
    })
    timer.isRunning ? stopTimer() : startTimer();
  }

  function resetClickHandler() {
    clearInterval(interval);
    setTimer({
      break: 5,
      session: 10,
      remainingTime: 10,
      mode: 'session',
      isRunning: false,
    })
  }
  
  return (
    <div>
      <Wrapper>
        <LengthSetter name="session" timer={timer} setTimer={setTimer}/>
        <LengthSetter name="break" timer={timer} setTimer={setTimer}/>
        <Timer timer={timer}></Timer>
        <Button id="start_stop"
                onClick={startStopClickHandler}>{timer.isRunning ? 'Stop' : 'Start'}</Button>
        <Button id="reset" onClick={resetClickHandler}>Reset</Button>
      </Wrapper>
    </div>
  );
}

export default App;
