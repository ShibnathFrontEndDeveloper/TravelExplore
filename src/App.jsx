
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

import {BrowserRouter, Routes,  Route} from 'react-router-dom'
import Gallery from './pages/Gallery'
import AddPage from './pages/AddPage'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/About'} element={<About/>}></Route>
        <Route path={'/Contact'} element={<Contact/>}></Route>
        <Route path={'/Gallery'} element={<Gallery/>}></Route>
        <Route path={'/Login'} element={<Login/>}></Route>
        <Route path={'/AddPage'} element={<AddPage/>}></Route>
 

      </Routes>
    </BrowserRouter>
  )
}

export default App
