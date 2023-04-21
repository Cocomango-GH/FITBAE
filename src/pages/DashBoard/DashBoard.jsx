import React, { useState, useEffect } from 'react';
import * as goalApi from '../../utilities/goal-api' 
import './DashBoard.css';

function Dashboard() {
  const [goalData, setGoalData] = useState({
    goals: [],
    numCompleted: 0,
    numRemaining: 0,
    avgCompletion: 0,
  });

  useEffect(() => {
    fetch('/api/goal')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
    .then(goals => {
        const numCompleted = goals.filter(goal => goal.completed).length;
        const numRemaining = goals.filter(goal => !goal.completed).length;
        const avgCompletion = Math.round(goals.reduce((total, goal) => total + goal.completionPercentage, 0) / goals.length);
        setGoalData({ goals, numCompleted, numRemaining, avgCompletion });
      })
      .catch(error => console.error('Error fetching goals:', error));
  }, []);

  return (
    <div className=''>
      <h2>Goals Progress</h2>
      <p>Number of completed goals: {goalData.numCompleted}</p>
      <p>Number of remaining goals: {goalData.numRemaining}</p>
      <p>Average completion percentage: {goalData.avgCompletion}%</p>
    </div>
  );
}

export default Dashboard;




