import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PageContent from "./components/PageContent/PageContent.jsx"
import Page from "./components/Page/Page.jsx"
import { useLocation } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar.jsx'
=======
>>>>>>> main

function App() {
  const [count, setCount] = useState(0)
  const currentPage = useLocation().pathname;
  return (
    <>
<<<<<<< HEAD
      {/* Would import the Nagication and Footer and see it on every page */}
      <div>
        <Navbar/>
=======
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* Would import the Nagication and Footer and see it on every page */}
      <div>
>>>>>>> main
        <main>
          <Page currentPage={currentPage} />
        </main>
    </div>
    </>
  )
}

export default App
