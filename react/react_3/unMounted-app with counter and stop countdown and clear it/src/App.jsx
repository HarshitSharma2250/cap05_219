import { useState,useEffect } from 'react'
import './App.css'
import Timer from './Timer.jsx'
// function Timer(){


//   useEffect(()=>{
//       console.log('hello motto')     
//       // jab bhi timer=true  hoga ye function  invoke hoga and sirf true value par helo motto print hoga 
      
// function tt(){
//   console.log('hello motto 2')
// }
// return tt
// // yee call back function tt function ko return kar rahaa hai ye tab invoke hoga jab timer=false hoga 

//     },[])
  
//   return(
//       <>
//       <p>this is timer</p>
//       </>
//   )
// }




function App() {
 
 
  const[timer , settimer]=useState(true)

  return (
    <>
<button onClick={()=>settimer(!timer)}>{timer ? 'show timer' : 'hide timer'}</button>
<div>
  {timer ? < Timer />: null}
</div>
    </>
  )
}

export default App
