import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as goalAPI from '../../utilities/goal-api'


export default function editGoal() {
    const [edit, setEditGoal] = useState({
        goalName: '',
        frequency: '',
        startDate: '',
        endDate:''
    })
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect( () =>{
        async function getGoal() {
        console.log(id)
        try{
        const goalData = await goalAPI.getGoal({goalId: id});
        console.log(goalData)
        setEditGoal(goalData)
        } catch (err) {
        console.error(err)
        }
        }
        getGoal();

    },[id]);
        


  async function editGoalSubmit(evt) {
    evt.preventDefault()
   try {
    await goalAPI.updateGoal(edit)
    navigate('/goal')
   } catch (err){
    console.error(err)
   }
   []
  }

  function handleChange(evt) {
    
      setEditGoal({...edit,[evt.target.name] : evt.target.value })

      
  }



    return (
        <form onSubmit={editGoalSubmit}>
      <h1>Edit Fitness Goals</h1>
      <label>
        Goals:
        <input 
        name='goalName'
        value={edit.goal}
        onChange={handleChange}
        placeholder='Enter Goal Here '
        />
      </label>
      <label>
        Frequency (per week):
        <input
          name='frequency'
          value={edit.frequency}
          onChange={handleChange}
          placeholder='Enter Days Here'        
        />
      </label>
      <label>
        Start Date:
        <input 
        name='startDate'
        value={edit.startDate}
        onChange={handleChange}
        placeholder='Enter StartDate'
        />
      </label>
      <label>
        End Date:
        <input 
        name='endDate'
        value={edit.endDate}
        onChange={handleChange}
        placeholder='Enter EndDate'
        />
      </label>
      <button type='submit'>Update </button>
    </form>
  );

}