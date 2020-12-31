import React from 'react';
import RoutineForm from "./../RoutineForm";
import {Modal} from '@material-ui/core';
const FormModal = props => {
  const {open, updateRoutine, saveNewRoutine, discardRoutine, currentlySelectedRoutine, userRoutines} = props;
  return (
    <Modal
      open={open}
    >
      <RoutineForm
        updateRoutine={updateRoutine}
        saveNewRoutine={saveNewRoutine}
        discardRoutine={discardRoutine}
        defaultRoutine={currentlySelectedRoutine || null}
        routineCount={userRoutines.length}
      />
    </Modal>
  )
}

export default FormModal;