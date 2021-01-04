const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  routineForm: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  routineName: {
    width: '30vw',

  },
  stepList: {
    border: '2px solid',
    width: '50%',
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    overflow: 'scroll',
    margin: '10px 0'
  },
  stepsContainer: {

  },
  step: {
    // margin: '0 auto'
  },
  deleteStepButton: {
    width: '20%',
    // margin: '0 auto'
  },
  button: {
    width: '20%',
    margin: '15px 5px'
  },
  addButton: {
    // width: '20%',
    // margin: '0 auto'
  },
  exitButtons: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
  }
}

export default styles;