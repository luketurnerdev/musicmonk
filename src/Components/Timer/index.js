import { useEventCallback } from '@material-ui/core';
import React, {useEffect} from 'react';
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

  useEffect(() => {
    restartTimerWithDateObject();
  }, [])
  const pauseOrResume = () => {
    isRunning ? pause() : resume();
  }

  const TimerRunning = () => {
    return <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
  }
  const restartTimerWithDateObject = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeLimit);
    restart(time)
  }
  return (
    <div style={{textAlign: 'center', margin: '0 auto'}}>
      <TimerRunning />
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={() => {
        restartTimerWithDateObject();
      }}>Restart</button>
      <button onClick={() => pauseOrResume()}>Pause / Resume</button>
    </div>
  );
}

export default Timer;