import { useState } from 'react'
import viteLogo from '/vite.svg'
import  './App.css'

function App() {
  const [text, setText] = useState('')
  const [state, setState] = useState([])

function InputType(e){
setText(e.target.value)
}

function Button(){
  let obj={
    name:{text},
    id:(Math.random()*9+1),
    stats:false
  }
let arr=[...state,obj]
setState(arr)
setText('')
}

  return (
    <>
   <div>
   <input type="text" value={text} onChange={InputType} />
   <button onClick={Button}>click</button>
   </div>
<ol>
{state.map((ele,index)=>(
    <li key={index} >
      <div >
        <span>Name : {ele.name.text}</span>
        <span style={{color:ele.id>4 ? 'green':'red'}}>stats :{ele.id>4 ? 'complete' : 'not complete'}</span>
      </div>
    </li>
    ))}
</ol>
  

    </>
  )
}

export default App
