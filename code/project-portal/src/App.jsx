import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PageContent from "./components/PageContent/PageContent.jsx"
import Page from "./components/Page/Page.jsx"
import { useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const currentPage = useLocation().pathname;
  return (
    <>
      {/* Would import the Nagication and Footer and see it on every page */}
      <div>
        <Navbar/>
        <main>
          <Page currentPage={currentPage} />
        </main>
    </div>
    </>
  )
}

export default App
