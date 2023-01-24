import LengthSetter from "./components/LengthSetter";
import Wrapper from "./components/Wrapper";
import Timer from "./components/Timer";
import Button from "./components/Button";
import { useState } from "react";

let interval;
const sound = document.getElementById('beep');

function App() {
  const [timer, setTimer] = useState({
    break: 5,
    session: 25,
    remainingTime: 25 * 60 * 1000,
    mode: 'session',
    isRunning: false,
  });

  
  function startTimer() {
    interval = setInterval(function() {
      setTimer(timer => {
        if (timer.remainingTime === 0) {
          playSound();
          return {
            ...timer,
            remainingTime: (timer.mode === 'session' ? timer.break : timer.session) * 60 * 1000,
            mode: timer.mode === 'session' ? 'break' : 'session'
          }
        }
        return {
          ...timer,
          remainingTime: timer.remainingTime - 1000}
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
  }
  
  function startStopClickHandler() {
    playSound();
    setTimer({
      ...timer,
      isRunning: !timer.isRunning
    })
    timer.isRunning ? stopTimer() : startTimer();
  }

  function resetClickHandler() {
    stopSound();
    clearInterval(interval);
    setTimer({
      break: 5,
      session: 25,
      remainingTime: 25 * 60 * 1000,
      mode: 'session',
      isRunning: false,
    })
  }

  function playSound() {
    sound.play();
  }

  function stopSound() {
    sound.pause();
    sound.load();
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
