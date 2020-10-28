import {Button, Modal, FormControl, InputLabel, Input, TextField} from '@material-ui/core/'
import styles from "./styles";
import React, {useState} from 'react';

const EditModal = props => {
  const {open, routine, handleModalClose, saveRoutine} = props;
  
  const RoutineEditForm = () => {
    const [formData, setFormData] = useState(routine);
    console.log('formdata', formData)

    const handleFormDataChange = (field, value) => {
      console.log(field, value);
      setFormData({...formData, [field]: value});
    };
    
    const handleStepChange = (index, value) => {
      
      console.log(index, value)
      let steps = [formData.steps];
      steps[index] = value;
      setFormData({...formData, [steps]: steps});
        
      //   handleChange: function (e) {
      //     // 1. Make a shallow copy of the items
      //     // 2. Make a shallow copy of the item you want to mutate
      //     // 3. Replace the property you're intested in
      //     // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      //     // 5. Set the state to our new copy
      //     this.setState({items});
      // },
    }
    return (
    <div style={styles.editForm}>
      <FormControl>
        <InputLabel htmlFor="my-input">Routine Title</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={e => handleFormDataChange('title', e.target.value)}/>
      </FormControl>

      {routine.steps.map((step, index) => {
        return <TextField
        id={index}
        label={`Step
        ${(index+1)}`}
        variant="outlined"
        defaultValue={step}
        onChange={e => handleStepChange(index, e.target.value)}
      />
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