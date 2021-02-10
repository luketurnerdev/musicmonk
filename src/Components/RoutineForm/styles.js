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
  inputText: {
    fontSize:'15px',
  },
  routineLabel: {
    fontSize:'15px'
  },
  routineNameMobile: {
    
    '&& div': {
      '&& input': {
        fontSize: '15px',
      }
    },
    width: '80vw',
  },

  //StepList sizes

  stepList: {
    border: '2px solid',
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
    height: '90%',
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    overflow: 'scroll',
    margin: '10px 0'
  },
  pageError: {
    color: 'red'
  },
  button: {
    width: '20%',
    margin: '15px 5px'
  },
  addButton: {
    backgroundColor: '#32a893',
  },
  buttonMobile: {
    width: '30%',
    height: '20px',
    margin: '15px 5px',
    '&& span': {
      fontSize: '10px'
    }
  },
  exitButtons: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
  }
}

export default styles;