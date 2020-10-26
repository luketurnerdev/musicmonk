import {Button, Modal} from '@material-ui/core/'
import React from 'react';

const EditModal = props => {
  const {open, routine, handleModalClose, saveRoutine} = props;
  return (<Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    > 
    <div>
      {routine && <h1>{routine.title}</h1>}
      <Button variant="contained" onClick={() => handleModalClose()}>Close</Button>
    </div>

    
  </Modal>
  )
}

export default EditModal;