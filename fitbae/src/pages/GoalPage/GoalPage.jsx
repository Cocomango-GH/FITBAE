import React, { useState, useEffect } from 'react'

export default function fitnessGoalPage() {
  const [goal, setGoal] = useState('');
  const [frequency, setFrequency] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [goalsList, setGoalList] = useState([]);

  useEffect(() => {
    const storedGoals = localStorage.getItem('goals');
    if (storedGoals) {
      setGoalList(JSON.parse(storedGoals));
    }
  }, []);

  function handleGoalChange(event) {
    setGoal(event.target.value)
  }

  function handleFrequencyChange(event) {
    setFrequency(event.target.value)
  }

  function handleStartDateChange(event) {
    setStartDate(event.target.value)
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value)
  }

  function handleAddGoal() {
    if(goal.trim() !== '') {
      setGoalList([...goalsList, {title: goal, frequency: frequency, startDate: startDate, endDate: endDate, completed: false}]);
      setGoal('');
      setFrequency('');
      setStartDate('');
      setEndDate('');
    }
  }

  useEffect(() => {
    localStorage.setItem('goal', JSON.stringify(goalsList));
  }, [goalsList]);

  return (
    <div>
      <h1>Fitness Goals</h1>
      <label>
        Goals:
        <input type='text' value={goal} onChange={handleGoalChange} />
      </label>
      <label>
        Frequency (per week):
        <input type='text' value={frequency} onChange={handleFrequencyChange} />
      </label>
      <label>
        Start Date:
        <input type='date' value={startDate} onChange={handleStartDateChange} />
      </label>
      <label>
        End Date:
        <input type='date' value={endDate} onChange={handleEndDateChange} />
      </label>
      <button onClick={handleAddGoal}>Add + </button>
      <ul>
        {goalsList.map((goal, index) => (
          <li key={index}>{goal.title} - {goal.frequency} times per week - Start Date: {goal.startDate} - End Date: {goal.endDate}</li>
        ))}
      </ul>
    </div>
  );
}
