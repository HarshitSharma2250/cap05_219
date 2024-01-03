import { useState } from 'react'
import './Todo.css'




const Todo=()=>{
const[state,updateState]=useState('')
const[todolist,settodolist]=useState([])

    function Input(e){
updateState(e.target.value) 
    }



function Button(){
    if (state.trim() === '') {
        return;
      }
let obj={
    id:new Date().getTime(),
    todo:state,
}

let arrlist=[...todolist,obj]
settodolist(arrlist);
updateState('')

}

   return(
    <>
   <div className='input_box'>
   <input onChange={Input} placeholder='enter title' value={state}/>
    <button onClick={Button} > ADD</button>
   </div>

<div className='container'>
{
    todolist.map((element,index)=>(
    <div className="output_box" key={index} >
        
<p><input type="radio" />{element.todo}</p>
<button onClick={()=>{
    const newData=[...todolist]
    newData.splice(index,1)
    settodolist(newData)
}}>delete</button>
    </div>
))
}
</div>

    </>
   )
}

export default Todo