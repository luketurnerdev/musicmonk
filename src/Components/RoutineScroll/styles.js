const styles = {
  scrollContainer: {
    backgroundColor: 'red',
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
    // flexDirection: 'column',
    // alignItems: 'center'
  },
  middleGridInner: {
    // height: '100%',
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
    justifyContent:'center',
    maxHeight: '20vh',
    alignItems: 'center'
  },
  routineTitle: {
    margin: '0 auto',
    textAlign: 'center'
  },
  playIcon: {
    height: '100px',
    width: '150px'
  }
};

export default styles;