import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import Subheader from './components/Subheader'

function App() {
  // State variables stored in the root to be distributed and changed within the entire application.
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth())
  
  return (
    <div className='application'>
      <Navbar backgroundColor='#FFFFFF' lightTheme={true}/>
      <Subheader backgroundColor='#005EA0' lightTheme={false} month={month} setMonth={setMonth} setYear={setYear} year={year}/>
      <main>
        <Calendar month={month} year={year} />
      </main>
    </div>
  )
}

export default App
