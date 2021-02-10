import React, {useState, useEffect, useCallback} from 'react';
import {Button, Typography} from '@material-ui/core/'
import {postNewRoutineToDb, getAllRoutinesForUser, deleteOneRoutineFromDb, editOneRoutineInDb} from "./../../api";
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PlayRoutine from "./../../Components/PlayRoutine";
import DeleteRoutine from "./../../Components/DeleteRoutine";
import RoutineDisplay from "./../../Components/RoutineDisplay";
import RoutineScroll from "./../../Components/RoutineScroll";
import FormModal from './../../Components/Form';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Loading from "./../../Components/Loading";
import axios from 'axios';
import useBreakpoint from "./../../hooks/useBreakpoint";


//When this page first loads, fetch users routines from db (fake for now)
//When the list is updated (ie, POST, PUT OR DELETE is called), setUserRoutines.

const RoutineList = props => {
  const size = useBreakpoint();
  const {classes, user} = props;
  const [userRoutines, setUserRoutines] = useState([]);
  const [currentlySelectedRoutine, setCurrentlySelectedRoutine] = useState(null);
  const [routineFormOpen, setRoutineFormOpen] = useState(null);
  const [playRoutineOpen, setPlayRoutineOpen] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  // Async API call state handlers
  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // 1 ) set deleting state to false on first load.
  // 2 ) routine begins to be deleted. deleting = true. modal is closed.
  // 3 ) Rest of the list is rendered, except the offending routine should show a spinner
  // 4 ) API call finishes, deleting = false. spinner now shows null.


  // Serverless routine fetch

  const url = process.env.NODE_ENV === 'development' 
    ? process.env.GATSBY_NETLIFY_SERVER
    : process.env.GATSBY_PRODUCTION_URL

  const fetchServerlessRoutines = async () => {
    console.log('fetchserverless')
    console.log(url)
    let response;
    // need to add user id here in axios call
    axios.get('http://localhost:8888/.netlify/functions/getAllUserRoutines')
    // axios.get(`${url}/.netlify/functions/getAllUserRoutines`)
    .then(res => {
      // response = res.data;
      console.log(res.data);
      // setUserRoutines(res.data);
    })

    return response;
  }

  // Async fetch function for useEffect
  const getRoutines = useCallback(async () => {
    console.log('inside getroutines')
    setFetching(true);
    const response = await getAllRoutinesForUser(user.sub);
    console.log(response)
    setFetching(false);
    return response;
  }, [user.sub])

  //SIDE EFFECTS

  // On mount
  useEffect(() => { 
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [getRoutines])

  // When routine form closed
  useEffect(() => {
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [routineFormOpen, getRoutines])
  
  // When delete is confirmed
  useEffect(() => {
    getRoutines().then(resp => {
      setUserRoutines(resp);
    })
  }, [deleteConfirmationOpen, getRoutines])

  // API CALLS AND SUBSQUENT STATE CHANGES

  const saveNewRoutine = async newRoutineData => {   
    setSaving(true); 
    await postNewRoutineToDb(user.sub, newRoutineData);
    setSaving(false);

    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }

  const updateRoutine = async (routineId, newData) => {  
    setSaving(true); 
    await editOneRoutineInDb(user.sub, routineId, newData);
    setSaving(false); 
    setRoutineFormOpen(false);
    setCurrentlySelectedRoutine(null);
  }

  const deleteRoutine = async (routineId) => {
    setDeleting(true);
    await deleteOneRoutineFromDb(user.sub, routineId);
    setDeleting(false);
    setDeleteModeStatus(false, null);
  }
  

  // TOGGLE VARIOUS MODES
  const setPlayModeStatus = (open, routine) => {
    setPlayRoutineOpen(open);
    setCurrentlySelectedRoutine(routine);
  }
  const setDeleteModeStatus = (open, routine) => {
    setDeleteConfirmationOpen(open);
    setCurrentlySelectedRoutine(routine);
  }
  const setFormModeStatus = (open, routine) => {
    setRoutineFormOpen(open);
    setCurrentlySelectedRoutine(routine);
  }

  const mapRoutines = () => {
    return userRoutines.map(routine => {
      return <RoutineDisplay
        routine={routine}
        key={routine.id}
        setDeleteModeStatus={setDeleteModeStatus}
        setFormModeStatus={setFormModeStatus}
        setPlayModeStatus={setPlayModeStatus}
      />
    })
  }

  const NoneFoundMessage = () => {
    return (
      fetching 
      ? <Loading />
      : <Typography variant="subtitle">
        No user routines found. Click below to create one!
      </Typography>

    )
  }
  const MobileList = () => {
    return (userRoutines.length ? 
      <RoutineScroll
      routines={userRoutines}
      setDeleteModeStatus={setDeleteModeStatus}
      setFormModeStatus={setFormModeStatus}
      setPlayModeStatus={setPlayModeStatus}
    />  : 
    <NoneFoundMessage />)
  }
  const List = () => {
    return (userRoutines.length ? mapRoutines() : <NoneFoundMessage />)
  }

  return (
    <>
    <div className={classes.routineListContainer}>
    {fetching 
      ? <Loading />
      : <div className={classes.list}> 
        {size === 'sm' ? 
        <MobileList />
        : <List/>}
      </div>
    }
     <Button 
      variant="contained"
      color="primary"
      className={classes.addNewButton}
      onClick={() => 
        setRoutineFormOpen(true)}
        >
          Add new routine
          <AddCircleOutlineIcon className={classes.plusIcon} />
      </Button>

      {/* <Button onClick={() => fetchServerlessRoutines()}>[Test] Get routines</Button> */}
    </div>

      {/* Various Modals */}

      <FormModal
        open={routineFormOpen}
        setFormModeStatus={setFormModeStatus}
        updateRoutine={updateRoutine}
        saveNewRoutine={saveNewRoutine}
        currentlySelectedRoutine={currentlySelectedRoutine}
        userRoutines={userRoutines}
        saving={saving}
      />

      {currentlySelectedRoutine &&<PlayRoutine
        open={playRoutineOpen}
        routine={currentlySelectedRoutine}
        setPlayModeStatus={setPlayModeStatus}
      />
      }

      <DeleteRoutine 
         routine={currentlySelectedRoutine}
         deleteRoutine={deleteRoutine} 
         setDeleteModeStatus={setDeleteModeStatus}
         open={deleteConfirmationOpen}
         deleting={deleting}
      />
    </>
  )
}

export default withStyles(styles)(RoutineList);