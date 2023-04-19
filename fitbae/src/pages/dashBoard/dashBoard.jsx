import React, { useState } from 'react'

export default function Dashboard({ goalsList }) {
  // create state to track completion percentage for each goal
  const [completionPercentage, setCompletionPercentage] = useState([]);

  // function to track completion percentage for a goal
  function trackCompletion(index) {
    // update the completion percentage for the goal at the given index
    const newCompletionPercentage = [...completionPercentage];
    newCompletionPercentage[index] = 100;
    setCompletionPercentage(newCompletionPercentage);
  }

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {options && options.map((option, index) => (
        <div key={index}>
          <h2>{option.title}</h2>
          <p>{option.description}</p>
        </div>
      ))}
    </div>
  );
}