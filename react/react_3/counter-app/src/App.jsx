import { useState } from 'react'

import viteLogo from '/vite.svg'



function Counter({count,setCount}){
function increament(){
  setCount(count+1)
}

  return(
    <>
    <h1>count is : {count}</h1>
<button onClick={increament}>click</button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter count={count} setCount={setCount} />
    </>
  )
}

export  {App}
