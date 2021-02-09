const styles = {
  newRoutineForm: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  step: {
    display: 'flex',
    width: '90%',
    flexDirection: 'column',
    marginTop: '3%'
  },
  stepMobile: {
    display: 'flex',
    width: '90%',
    flexDirection: 'column',
    marginTop: '3%',
  },
  timerOption: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  formControlRoot: {
    display: 'flex',
    width: '100%',
    marginTop:'2%'
  },
  addTimer: {
    marginTop:'2%'
  },
  inputLabel: {
    fontSize: '20px'
  },
  deleteButton: {
    marginTop: '5%',
    width: '0',
    margin: '0 auto'
  },
  deleteStepButton: {
    width: '80%',
    height: '25px',
    margin: '0 auto',
    marginTop: '5%',
    '&& span': {
      fontSize: '12px'
    }
  }
}

export default styles;