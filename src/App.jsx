import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
      <h2>ContextApi</h2>
      <Login/>
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
