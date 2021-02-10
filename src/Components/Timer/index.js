import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { useTimer } from 'react-timer-hook';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {withStyles} from '@material-ui/styles';
import styles from "./styles";
import useBreakpoint from "./../../hooks/useBreakpoint";

const Timer = (props, {expiryTimestamp}) => {
  const size = useBreakpoint();
  const {timeLimit, classes} = props;
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


  // Start the timer immediately on load
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
    return <div className={size === 'sm' ? classes.timerMobile : classes.timer}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
  }
  
  return (
    <div className={classes.timerContainer}>
      <TimerRunning />
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

export default withStyles(styles)(Timer);