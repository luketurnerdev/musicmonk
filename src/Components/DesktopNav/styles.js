const styles = {
  desktopNavContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    zIndex: '1',
    border: '2px solid',
    borderRadius: '10px',
    width: '25vw',
    height: '100vh',
  },
  navList: {
    height: '50%',
    textAlign: 'center',
    display:'flex',
    flexDirection:'column',
    paddingTop: '30%',
  },
  navItem: {
    height: '5%',
    width: '100%',
    textTransform: 'none',
    margin: '10% 0',
    backgroundColor: '#FFFFFF',
    textAlign:'center',
    textDecoration: 'none'
  },
  logoutButton: {
    textAlign:'center'
  },
  title: {
    textAlign:'center',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20%'
  },
}

export default styles;