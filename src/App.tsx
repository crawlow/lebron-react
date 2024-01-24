import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
        <Link to="about">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to="home">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      <Outlet />
    </>
  )
}

export default App
