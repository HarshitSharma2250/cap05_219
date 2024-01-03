let root = document.getElementById('root');
const main = async()=>{
    try {
        let res=await fetch('http://localhost:3000/posts')
        let data= await res.json()
        printData(data)
    } catch (error) {
        console.log(error)
    }
}

const printData=(data)=>{
data.forEach(({id,name,stats})=>{

let rootel=document.createElement('div')
rootel.className='container';

let idel=document.createElement('p');
idel.textContent='ID :  '+id;

let titleel=document.createElement('p');
titleel.textContent='NAME :  '+name;

let statsel=document.createElement('p');
statsel.textContent='STATS :  '+stats;

let deleteel=document.createElement('button');
deleteel.textContent='delete';

let schangest=document.createElement('button');
schangest.textContent='change stats'

schangest.onclick=async function(){
    try {
        let res=await fetch(`http://localhost:3000/posts/${id}`,{
            method:"PATCH",
            body:JSON.stringify({stats:!stats}),
            headers:{"Content-Type":"application/json"}
        })
      await res.json()
    } catch (error) {
        console.log(error)
    }
}










deleteel.onclick=async function(){
    try {
        await fetch(`http://localhost:3000/posts/${id}`,{method:"DELETE"})
    
    } catch (error) {
        console.log(error)
    }
}



rootel.append(idel,titleel,statsel,deleteel,schangest)

root.appendChild(rootel)
})

}

let button=document.getElementById('button');

const addTask=async()=>{
    try {
        let input=document.getElementById('input').value

        let res=await fetch(`http://localhost:3000/posts`,{
            method:'POST',
            body:JSON.stringify({name:input,stats:false}),
            headers:{"Content-Type":"application/json"}
        })
     await res.json()
    } catch (error) {
        console.log(error)
    }
}
button.addEventListener('click',addTask)
main()