import React from 'react';
import RoutineForm from "./../RoutineForm";
import {Modal} from '@material-ui/core';
const FormModal = props => {
  const {open, updateRoutine, saveNewRoutine, setFormModeStatus, currentlySelectedRoutine, userRoutines} = props;
  return (
    <Modal
      open={open}
    >
      <RoutineForm
        updateRoutine={updateRoutine}
        saveNewRoutine={saveNewRoutine}
        setFormModeStatus={setFormModeStatus}
        defaultRoutine={currentlySelectedRoutine || null}
        routineCount={userRoutines.length}
      />
    </Modal>
  )
}

export default FormModal;