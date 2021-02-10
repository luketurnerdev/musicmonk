import React from 'react';
const RoutineScroll = props => {
  const {routines} = props;
  console.log(routines)
  return (
    <div>
      <div>
        scrolly
        {routines[0].title}
        {/* {routines[0].title} */}
      </div>
    </div>
  )
}

export default RoutineScroll;

// Goal 1: Render a component
// that displays the text of the first routine 
//in the array, with a play button, delete and 
//edit button (they dont have to work yet

// Goal 2: implement buttons to scroll left and right,
// making sure that we can go <0 and > length to reset 

// Goal 3: get modals working


