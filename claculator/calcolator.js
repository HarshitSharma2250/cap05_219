let input1=document.querySelector('.input1')
let spann=document.querySelector('span')
let input2=document.querySelector('.input2')
let special_symbol=document.querySelectorAll('.next>button')
let operator=document.querySelectorAll('.operator>button')
let number=document.querySelectorAll('.buttons>button')

let delete_history=document.querySelector('#delete_history')
let history_show=document.querySelector('.history>ul')


let sum_input1=''
let sum_input2=''
let span_sum=''

let isPress=true;
for(let i=0 ; i<number.length;i++){
    number[i].addEventListener('click',()=>{
        if(isPress==true){
        sum_input1+=number[i].innerHTML
        input1.value=sum_input1;
}else {
    sum_input2+= number[i].innerHTML;
    input2.value = sum_input2;
  }
    })
}



for(let i=0 ; i<operator.length-1; i++){
    operator[i].addEventListener('click',()=>{
        if(input1.value==''){
            span_sum=''
            input2.value=''
        }else{
            isPress=false;
            span_sum=operator[i].innerHTML;
            spann.innerText=span_sum;
        }
   
    })
}
special_symbol[1].addEventListener('click',()=>{

// if someone click this button before fill input then will not add in spann and can not add in input2
    if(input1.value==''){
        span_sum=''
        input2.value=''
    }else{
   span_sum=special_symbol[1].innerText;
spann.innerText=span_sum;
  isPress=false;
    }
 })

function result_get(sum_input1,sum_input2,span_sum){
    sum_input1=parseFloat(sum_input1)
    sum_input2=parseFloat(sum_input2)
if(span_sum=='+'){
    return sum_input1+sum_input2
}
if(span_sum=='-'){
    return sum_input1-sum_input2
}
if(span_sum=='x'){
return sum_input1*sum_input2
}
if(span_sum=='/'){
    return sum_input1/sum_input2
}
if(span_sum=='%'){
    return  (sum_input1*sum_input2)/100;

}
}

operator[4].addEventListener('click',()=>{
    //create a list for add its value in that
    let list=document.createElement('li')
    let first_Number=sum_input1;
    let second_Number=sum_input2;

    sum_input1=result_get(sum_input1,sum_input2,span_sum)
sum_input1=sum_input1.toFixed(5)
    input1.value=parseFloat(sum_input1)

    //now upadate value in list we are write after input1.value has updated 
    list.innerText=first_Number+span_sum+second_Number+"="+ input1.value; 
    history_show.append(list)


    sum_input2=''
    input2.value=''
    spann.innerText=''
    isPress=true;


        })

 special_symbol[2].addEventListener('click',()=>{

    //create a list also here for add its value
    let list=document.createElement('li')
    let first_Number=sum_input1;

    if(input1.value==''){
        span_sum=''
        input2.value=''
    }else{
    input1.value=Math.sqrt(parseFloat(sum_input1)).toFixed(5)
    sum_input1=input1.value.toString()
    }
    list.innerText=special_symbol[2].innerText+'('+first_Number+')'+"="+ input1.value
    history_show.append(list)


    sum_input2=''
    input2.value=''
    spann.innerText=''
    isPress=true
 })
 

 special_symbol[0].addEventListener('click',()=>{
    span_sum=''
    sum_input2=''
    input2.value=''
    spann.innerText=''
    isPress=true
    input1.value=''
    sum_input1=''

 })

 delete_history.addEventListener('click',()=>{
    history_show.innerHTML=''
 })