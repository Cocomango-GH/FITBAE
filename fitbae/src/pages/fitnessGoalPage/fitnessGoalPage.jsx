import React, { useState } from 'react'




export default function fitnessGoalPage() {
    // create goal state 
  const [goal, setGoal ] = useState('');
  const [goalsList, setGoalList] = useState([]);

  function handleGoalChange(event) {
    setGoal(event.target.value)
  }
  
  function handelAddGoal() {
    if(goal.trim() !== '') {
      setGoalList([...goalsList, goal]);
      setGoal('');
    }
  }
  

  return (
    //create input for goal 
    
   <div>
    <h1>Fitness Goals</h1>
    <label>
      Goals:
      <input type='text' value={goal} onChange={handleGoalChange}  />
    </label>
    <button onClick={handelAddGoal}>Add + </button>
    <ul>
      {goalsList.map((goal, index) => (
        <li key={index}>{goal}</li>
      ))}
    </ul>
  </div>
  //we want to add a button to submit the goal to a list of goals. 
   // now i want that goal to be saved and dis played on the goals page. 
   //on this goal age i also want a input for the duration and the dated started and expected completion date 
  );
}
