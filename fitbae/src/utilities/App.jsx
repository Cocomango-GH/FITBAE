import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  const [userStatus, setUserStatus] = useState(null);
  const [count, setCount] = useState(0);

  return (
    <main>
      {userStatus ? (
        <>
          <NavBar user={userStatus} setUser={setUserStatus} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders/" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <div>
          <AuthPage setUser={setUserStatus} />
        </div>
      )}
    </main>
  );
}


export default App
