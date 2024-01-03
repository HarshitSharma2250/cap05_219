let btn = document.getElementById("order_btn");
let boxes = document.querySelectorAll(".box");
let randomNumber=document.getElementById('order_number')




boxes.forEach(ele=>{
ele.addEventListener('click', function() {
  this.classList.add('clicked');
});
})



btn.addEventListener("click", myMenu);

let total = 0;

boxes[0].addEventListener("click", function () {
  total += 5;
});
boxes[1].addEventListener("click", function () {
  total += 3.5;
});
boxes[2].addEventListener("click", function () {
  total += 13;
});

randomNumber.textContent=Math.floor(Math.random()*1000+9999);


function myMenu() {
  let randomTime = Math.floor((Math.random() * 1 + 9) * 1000);
  let promise = new Promise((res, rej) => {
    setTimeout(() => {
      let accountBalance = 10;
      if (total <= 10) {
        res();
      } else {
        rej();
      }
    }, randomTime);
  });


promise
  .then(() => {
    document.getElementById("hidden").style.display = "block";
  })
  .catch(() => {
    document.getElementById("hiddfailed").style.display = "block";
  });

}