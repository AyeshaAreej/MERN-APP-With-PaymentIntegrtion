import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './screens/signup'
import Login from './screens/login'
import Home from './screens/Home'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' exact element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
