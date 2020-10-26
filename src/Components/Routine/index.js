import React from 'react';


//Should have steps, and the ability to complete each step. 

//Once all steps are complete, can finish whole routine
const Routine = props => {
  const {title} = props;
  return (
    <>

      <h1>{title}</h1>

    </>
  )
}

export default Routine;