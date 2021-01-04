import React from 'react';
import RoutineForm from "./../RoutineForm";
import {Modal} from '@material-ui/core';
const FormModal = props => {
  const {open, updateRoutine, saveNewRoutine, setFormModeStatus, currentlySelectedRoutine, userRoutines, saving} = props;
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
        saving={saving}
      />
    </Modal>
  )
}

export default FormModal;