import React from 'react';
import { useTimer } from 'react-timer-hook';
const Timer = (props, {expiryTimestamp}) => {
  const {timeLimit} = props;
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  console.log(timeLimit);
  const pauseOrResume = () => {
    isRunning ? pause() : resume();
  }
  return (
    <div style={{textAlign: 'center', margin: '0 auto'}}>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={() => pauseOrResume()}>Pause</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        // TODO replace with time prop
        time.setSeconds(time.getSeconds() + timeLimit);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default Timer;