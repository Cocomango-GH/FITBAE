import React, { useEffect, useState } from "react";
import * as goalAPI from '../../utilities/goal-api'
// import { set } from "mongoose";

export default function GoalList() {
    const [goals, setGoals] = useState([])
    useEffect(() =>  {
        async function getGoals() {
            const result = await goalAPI.getAll();
            setGoals(...goals, result)
        }
        getGoals()
    },[]);

/// update goals 
    useEffect(() =>  {
        async function getGoals() {
            const edit = await goalAPI.updateGoal();
            setGoals(...goals, edit)
        }
        getGoals()
    },[]);


// delete goal 
useEffect(() => {
    async function getGoals() {
        const deletegoal = await goalAPI.deleteGoal();
        setGoals(...goals, deletegoal)
    }
    getGoals()
},[]);


    return (
        <>
        <h1>Goals</h1>
        <ul>
        {goals.map(goal => (
            <li key={goal._id}>
              <p>{goal.goalName}</p>
              <p>{goal.startDate}</p>
              <p>{goal.endDate}</p>
            </li>
          ))}
        </ul>
        </>
    );
};