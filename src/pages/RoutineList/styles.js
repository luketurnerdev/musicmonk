const styles = {
  routineDisplay: {
    display: 'flex',
    justifyContent: 'space-around',
    border: '2px solid',
    margin: '10px 0'
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    transform: 'translateX(-50%)',
    height: '75%'
  },
  addNewButton: {
    display: 'flex',
    flexDirection: 'row',
    border: '2px solid black',
    width: '80%',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop:'3%'
  },
  plusIcon: {
    position: 'relative',
    bottom: '2px',
    left: '5px'
  }
};

export default styles;