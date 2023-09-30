import React from 'react'
import ReactDOM from 'react-dom/client'
import CartContextProvider from './context/Cart'
import Router from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  </React.StrictMode>,
)
