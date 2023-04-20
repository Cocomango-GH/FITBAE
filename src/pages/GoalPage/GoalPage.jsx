import React, { useState } from 'react'
import * as goalApi from '../../utilities/goal-api'

export default function GoalPage() {
  const [goal, setGoal] = useState({
    goalName: '',
    frequency: '',
    startDate: '',
    endDate: ''
})

 function handleChange(evt) {
  const newGoal = { ...goal, [evt.target.name]: evt.target.value };
  setGoal(newGoal);
}

 function handleNewGoal(evt){
  evt.preventDefault()
  goalApi.createGoal(goal)
  setGoal({ goalName: "", frequency: "", startDate: "", endDate: ""})
}


// //fetch here useeffect  newly added fetching goal data 

  return (
    <form onSubmit={handleNewGoal}>
      <h1>Fitness Goals</h1>
      <label>
        Goals:
        <input 
        name='goalName'
        value={goal.goal}
        onChange={handleChange}
        placeholder='Enter Goal Here '
        />
      </label>
      <label>
        Frequency (per week):
        <input
          name='frequency'
          value={goal.frequency}
          onChange={handleChange}
          placeholder='Enter Days Here'        
        />
      </label>
      <label>
        Start Date:
        <input 
        name='startDate'
        value={goal.startDate}
        onChange={handleChange}
        placeholder='Enter StartDate'
        />
      </label>
      <label>
        End Date:
        <input 
        name='endDate'
        value={goal.endDate}
        onChange={handleChange}
        placeholder='Enter EndDate'
        />
      </label>
      <button type='submit'>Add + </button>
    </form>
  );
}








