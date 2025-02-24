
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
  
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </>
  )
}

export default App
