import React, { useEffect, useState } from "react";
import * as goalAPI from '../../utilities/goal-api'
import { Link } from "react-router-dom";

export default function GoalList() {
    const [goals, setGoals] = useState([])

  

    useEffect(() =>  {
        async function getGoals() {
            const result = await goalAPI.getAll();
            setGoals(...goals, result)
        }
        getGoals()
    },[]);

    function handleDelete(id) {
        const goalid = {
            id,
        }
        goalAPI.deleteGoal(goalid)

    }


    return (
        <>
        <h1>Goals</h1>
        <ul>
        {goals.map((goal) => (
            <li key={goal._id}>
              <p>{goal.goalName}</p>
              <p>{goal.startDate}</p>
              <p>{goal.endDate}</p>
              <button onClick={() => handleDelete(goal._id)}>delete</button>
              {/* <button onClick={() => handleUpdate(goal._id, { ...goal, goalName: 'New Goal Name' })}>update</button> */}
                <Link to={`/goals/${goal._id}/edit`}> 
              <button  >update</button>
              </Link>
            </li>
          ))}
        </ul>
        </>
    );
};