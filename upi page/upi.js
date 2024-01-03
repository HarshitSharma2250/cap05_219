
    let input = document.getElementById('input');
    let send_button = document.querySelector('.send_button');
    const inputs = document.querySelectorAll('#pin-input input');
let container=document.getElementById('container')
let password_page=document.getElementById('password_page')
let alert=document.querySelector('.alert')

let amount_selected=document.querySelectorAll('.amount_selected')

let after_pin_button=document.getElementById('after_pin')








    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && index > 0 && input.value === '') {
                inputs[index - 1].focus();
            }
        });
    });



    input.addEventListener('input',()=>{
    if (input.value === '') {
        send_button.style.opacity = '0.5';
        send_button.style.backgroundColor = '#fff';
        send_button.style.color = 'black';
        send_button.style.cursor = 'context-menu';

    }else {
        send_button.style.opacity = '1';
        send_button.style.backgroundColor = 'rgb(27, 27, 72)';
        send_button.style.color = '#fff';
        send_button.style.cursor = 'pointer';
//addevent listener on button for payment  if else cndition is true only then work 
        send_button.addEventListener('click',payment)
    }
    })

  
function payment(){
let random=Math.floor((Math.random()*1+5)*1000)
let promises=new Promise((res,rej)=>{
    setTimeout(()=>{
        if(input.value>=1 && input.value<=100000 ){
            res()
           
        }else{
            rej()
        }
    },random)
})

promises.then(()=>{
    container.style.display='none';
    password_page.style.display='block'

    amount_selected.forEach(ele=>{
        ele.textContent=input.value+' . 00'
    })

})
.catch(()=>{
    container.style.display='block';
    password_page.style.display='none'
   alert.style.display='block'
})
}
    



const inputsArray = Array.from(inputs); // Convert input list to an array

// Function to check if all input fields have non-empty values
function areAllInputsFilled() {
  return inputsArray.every(input => input.value !== '');
}

// Add an event listener to each input element
inputsArray.forEach(input => {
  input.addEventListener('input', () => {
    if (areAllInputsFilled()) {
      // All input fields have non-empty values
      after_pin_button.style.opacity = '1';
      after_pin_button.style.cursor = 'pointer';
      after_pin_button.style.backgroundColor = 'rgb(27, 27, 72)';
      after_pin_button.style.color = '#fff';
    } else {
      // At least one input field is empty
      after_pin_button.style.opacity = '0.5';
      after_pin_button.style.backgroundColor = '#fff';
      after_pin_button.style.color = 'black';
      after_pin_button.style.cursor = 'context-menu';
    }
  });
});

    














    