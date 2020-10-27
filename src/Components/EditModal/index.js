import {Button, Modal, FormControl, InputLabel, Input, TextField} from '@material-ui/core/'
import styles from "./styles";
import React, {useState} from 'react';

const EditModal = props => {
  const {open, routine, handleModalClose, saveRoutine} = props;

  
  const RoutineEditForm = () => {
    const [formData, setFormData] = useState(routine);
    console.log('formData')
    console.log(formData)

    const handleFormDataChange = (field, value) => {
      console.log(field, value);
      // let clone = Object.assign({field: value}, formData);
      setFormData({...formData, [field]: value});
    };
    return (
    <div style={styles.editForm}>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={e => handleFormDataChange('title', e.target.value)}/>
      </FormControl>
      {/* {routine.steps.map((step, index) => {
        return <TextField id={index} label={`Step ${(index+1)}`} variant="outlined" defaultValue={step} />
      })} */}
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