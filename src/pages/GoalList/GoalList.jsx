import React, { useEffect, useState } from "react";
import * as goalAPI from '../../utilities/goal-api'
// import { set } from "mongoose";


export default function GoalList() {
    const [goals, setGoals] = useState([])

    // const [edit, setEdit] = useState([])

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
    function handleUpdate(id) {

        goalAPI.updateGoal(goals[id])
        
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
              {/* <input name='goalName' value={goal.goal} onc */}
              <button onClick={() => handleUpdate(goal._id)}>update</button>
            </li>
          ))}
        </ul>
        </>
    );
};