import React from 'react';


const RoutineStep = props => {
  const {text} = props;
  return <h1>{text}</h1>
};


const Routine = () => {
  const steps = [
  {
    id: 1,
    text: 'abc'
  },
  {
    id: 2,
    text: 'abc'
  },
  {
    id: 3,
    text: 'abc'
  },
];
  return (
    <>

      {steps.map(step => {
        return <RoutineStep text={step.text} />
      })}

    </>
  )
}

export default Routine;