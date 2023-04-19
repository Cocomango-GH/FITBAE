import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [numCompleted, setNumCompleted] = useState(0);
  const [numRemaining, setNumRemaining] = useState(0);
  const [avgCompletion, setAvgCompletion] = useState(0);

  useEffect(() => {
    fetch('/api/goals')
      .then(response => response.json())
      .then(data => {
        setGoals(data);
        setNumCompleted(data.filter(goal => goal.completed).length);
        setNumRemaining(data.filter(goal => !goal.completed).length);
        setAvgCompletion(Math.round(data.reduce((total, goal) => total + goal.completionPercentage, 0) / data.length));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Goals Progress</h2>
      <p>Number of completed goals: {numCompleted}</p>
      <p>Number of remaining goals: {numRemaining}</p>
      <p>Average completion percentage: {avgCompletion}%</p>
      <h2>Upcoming Goals</h2>
      <ul>
        {goals.filter(goal => !goal.completed).map(goal => (
          <li key={goal._id}>
            <p>{goal.title}</p>
            <p>{goal.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;




