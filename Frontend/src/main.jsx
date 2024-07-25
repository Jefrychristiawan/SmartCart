import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { OrdersContextProvider } from './context/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <OrdersContextProvider>
        <App />
      </OrdersContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>,
)
