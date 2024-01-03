import React from 'react'
import ReactDOM from 'react-dom/client'
import {Pain} from './Pain.jsx'
import { useState } from 'react'

function App(){
  const[text,setText]=React.useState('')
  return(
    <>
    <Pain text={text} setText={setText}/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render( <App />)
