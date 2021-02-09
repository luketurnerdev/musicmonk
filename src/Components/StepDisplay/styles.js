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
    flexDirection: 'row',
    width: '100%',
    marginTop:'2%'
  },
  addTimer: {
    marginTop:'2%'
  },
  timerSelect: {
    width:'85%',
    fontSize: '15px'
  },
  timerInputLabelMobile: {
    fontSize: '12px',
    margin: '10px 5px',
    textAlign: 'center',
  },
  timerInputLabel: {
    fontSize: '12px',
    margin: '0 2px',
    textAlign: 'center',
  },
  deleteButton: {
    marginTop: '5%',
    width: '0',
  },
  deleteStepButton: {
    width: '80%',
    height: '25px',
    margin: '0 auto',
    marginTop: '5%',
    '&& span': {
      fontSize: '12px'
    }
  },
  textInputLabel: {
    fontSize: '15px'
  }
}

export default styles;