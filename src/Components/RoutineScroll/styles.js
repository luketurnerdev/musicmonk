const styles = {
  scrollContainer: {
    height: '70%',
    width: '85%',
    margin: '0 auto',
    marginTop: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  smallOuterGrids: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  middleGrid: {
    height: '100%',
    display: 'flex',
  },
  middleGridInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-evenly',
    maxWidth: '100%'
  },
  middleGridItems: {
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    justifyContent:'space-evenly',
    maxHeight: '15vh',
    alignItems: 'center'
  },
  routineTitle: {
    margin: '0 auto',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'

  },
  playIcon: {
    fontSize: '5em'
  }
};

export default styles;