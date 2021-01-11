const styles = {
  routineDisplay: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '2px solid',
    margin: '10px 0'
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBox: {
    border: '2px solid',
    width: '100%',
    height: '85%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  playGridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  routineTitle: {

  },
  startButton: {
    height: '80%',
    width: '40%'
  },
  newRoutineFormRoot: {
    backgroundColor: 'white'
  },
  routineListContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid black',
    width: '80%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  }
};

export default styles;