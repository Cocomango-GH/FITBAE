import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [numCompleted, setNumCompleted] = useState(0);
  const [numRemaining, setNumRemaining] = useState(0);
  const [avgCompletion, setAvgCompletion] = useState(0);

  useEffect(() => {
    fetch('/api/goals')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        setGoals(data);
        setNumCompleted(data.filter(goal => goals.completed).length);
        setNumRemaining(data.filter(goal => !goals.completed).length);
        setAvgCompletion(Math.round(data.reduce((total, goals) => total + goals.completionPercentage, 0) / data.length));
      })
      .catch(error => console.error('Error fetching goals:', error));
  }, []);
  

  return (
    <div>
      <h2>Goals Progress</h2>
      <p>Number of completed goals: {numCompleted}</p>
      <p>Number of remaining goals: {numRemaining}</p>
      <p>Average completion percentage: {avgCompletion}%</p>
      <h2>Upcoming Goals</h2>
      <ul>
        {goals.filter(goals => !goals.completed).map(goal => (
          <li key={goals._id}>
            <p>{goals.title}</p>
            <p>{goals.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;




