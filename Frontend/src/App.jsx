import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import SmartCart from './components/SmartCart'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Shop from './pages/Shop'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
// https://i.pinimg.com/originals/f3/20/ee/f320eeb6a56143d7ef2879f4a77c3827.png
function App() {
  const { user } = useAuthContext()
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
          element={!user ? <Login /> : <Navigate to="/profile" />} 
        />
        <Route 
          path="/register" 
          element={!user ? <Register /> : <Navigate to="/profile" />} 
        />
        <Route 
          path="/profile" 
          element={user ? <Profile />: <Navigate to="/login" />} 
        />
        <Route 
          path='/shop/:id'
          element={<ProductDetail />}
        />
        <Route 
          path='/cart'
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
