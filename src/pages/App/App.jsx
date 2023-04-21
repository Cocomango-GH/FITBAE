// import { Button } from 'react-bootstrap';
import { useState } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import DashBoard from '../DashBoard/DashBoard';
import GoalPage from '../GoalPage/GoalPage';
import GoalList from '../GoalList/GoalList';
import EditPage from '../EditPage/EditPage';

export default function App() {
//
//set to true right now just to test set back to user 
  const [user, setUser] = useState(true)

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/goals" element={<DashBoard />} />
            <Route path="/goals/new" element={<GoalPage />} />
            <Route path="/goallist" element={<GoalList />} />
            <Route path="/goals/:id/edit" element={<EditPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

