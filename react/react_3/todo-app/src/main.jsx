import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Todo(){
  return(
    <>
    <App />
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Todo />)
