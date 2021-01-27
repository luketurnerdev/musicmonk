const styles = {
  formContainer: {
    height: '100%',
  },
  routineForm: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
  },
  routineName: {
    width: '30vw',

  },
  stepList: {
    border: '2px solid',
    width: '50%',
    height: '50%',
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    overflow: 'scroll',
    margin: '10px 0'
  },
  deleteStepButton: {
    width: '20%',
  },
  button: {
    width: '20%',
    margin: '15px 5px'
  },
  exitButtons: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
  }
}

export default styles;