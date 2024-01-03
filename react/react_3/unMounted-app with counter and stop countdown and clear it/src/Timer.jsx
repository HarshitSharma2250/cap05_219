import {useState, useEffect } from 'react'

function Timer(){
const[coundown, setcountdown]=useState(5)

    useEffect(()=>{
        console.log('hello motto')

   let getcount= setInterval(()=>{
    console.log(new Date().getTime())
 setcountdown((pp)=>{
return (pp-1)



})
// setinterval ki vajah se phle setcountdown update hoga then countdown update hoga and every 1000mss baad ye  callback function " pp " call hoga and setcountdown me value update hogi.


},1000)


  function clear(){
    console.log('clear all things ')
    clearInterval(getcount)
  }
  return clear;

// jab bhi component unmout hoga react clear  function ko invoke karega or setInterval wahi stop ho jayega


      },[])
    



    return(
        <>
        <p>{coundown}</p>

        </>
    )
}

export default Timer