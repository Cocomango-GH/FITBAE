
import { useState } from 'react'
import './App.css'
import fitnessGoalPage from '../fitnessGoalPage/fitnessGoalPage';
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

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
            <Route path="/Goals/" element={<fitnessGoalPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

