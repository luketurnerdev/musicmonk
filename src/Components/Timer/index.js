import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { useTimer } from 'react-timer-hook';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const Timer = (props, {expiryTimestamp}) => {
  const {timeLimit} = props;
  const [expired, setExpired] = useState(false);
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => setExpired(true)});


  // Start the timer immediately
  useEffect(() => {
    restartTimerWithDateObject();
  }, [])

  const restartTimerWithDateObject = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeLimit);
    restart(time)
    setExpired(false);
  }

  const pauseOrResume = () => {
    isRunning ? pause() : resume();
  }

  const TimerRunning = () => {
    return <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
  }
  
  return (
    <div style={{textAlign: 'center', margin: '0 auto'}}>
      <TimerRunning />
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <Button onClick={() => {
        restartTimerWithDateObject();
      }}>
        Restart
      </Button>
      {
        !expired && 
          <Button onClick={() => pauseOrResume()}>
          {isRunning? <PauseIcon/> : <PlayArrowIcon />}
        </Button>
      }
    </div>
  );
}

export default Timer;