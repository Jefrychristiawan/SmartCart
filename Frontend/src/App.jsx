import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SmartCart from './components/SmartCart'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Shop from './pages/Shop'
import Login from './pages/Login'
import Register from './pages/Register'
// https://i.pinimg.com/originals/f3/20/ee/f320eeb6a56143d7ef2879f4a77c3827.png
function App() {
  
  return(
    <BrowserRouter>
      <SmartCart />
      <hr />
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/shop" 
          element={<Shop />} 
        />
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/register" 
          element={<Register />} 
        />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
