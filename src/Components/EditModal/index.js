import {Button, Modal, TextField} from '@material-ui/core/'
import styles from "./styles";
import React, {useState} from 'react';

const EditModal = props => {
  const {open, routine, handleModalClose, saveRoutine} = props;
  const [routineFormData, setRoutineFormData] = useState(routine); 
  const RoutineEditForm = () => {
    console.log(routine);
    return (
    <div style={styles.editForm}>
      <TextField id="title" label="Routine title" variant="outlined" defaultValue={routine.title} />
      {routine.steps.map((step, index) => {
        return <TextField id={index} label={`Step ${(index+1)}`} variant="outlined" defaultValue={step} />
      })}
    </div>
    )
  }
  return (<Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    > 
    <div>
      {routine && <RoutineEditForm />}
      <Button variant="contained" onClick={() => handleModalClose()}>Close</Button>
    </div>

    
  </Modal>
  )
}

export default EditModal;