import { Button } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useTimer } from 'react-timer-hook';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
      <Button onClick={() => {
        restartTimerWithDateObject();
      }}>
        Restart
      </Button>
      <Button onClick={() => pauseOrResume()}>
        {isRunning? <PauseIcon/> : <PlayArrowIcon />}
      </Button>
    </div>
  );
}

export default Timer;