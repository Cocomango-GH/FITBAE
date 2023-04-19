
import { useState } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import DashBoard from '../DashBoard/DashBoard';
import FitnessGoalPage from '../fitnessGoalPage/fitnessGoalPage';

export default function App() {

  const [user, setUser] = useState(getUser())

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
            <Route path="/goals/new" element={<FitnessGoalPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

