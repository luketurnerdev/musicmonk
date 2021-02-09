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

  //StepList sizes

  stepList: {
    border: '20px solid',
    width: '80%',
    height: '80%',
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    overflow: 'scroll',
    margin: '10px 0'
  },
  stepListMobile: {
    border: '1px solid',
    width: '80%',
    height: '10%',
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    overflow: 'scroll',
    margin: '10px 0'
  },
  pageError: {
    color: 'red'
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