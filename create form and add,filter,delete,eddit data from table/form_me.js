// catch the element from from form and table
let form=document.querySelector('form')
let name=document.querySelector('#name')
let Employee_ID=document.querySelector('#Employee_ID')
let Department=document.querySelector('#Department')
let exp=document.querySelector('#exp')
let email=document.querySelector('#email')
let number=document.querySelector('#number')
let tbody=document.querySelector('tbody')

// for filter
let searchText = document.querySelector('#search_bar');
let departmentFilter=document.querySelector('#department_filter')


let edditrow=null; // Variable to track the edited row


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    

if(edditrow){ // update data in that edditeow of edditbutton
    edditrow.cells[0].innerText = name.value;
        edditrow.cells[1].innerText = Employee_ID.value;
        edditrow.cells[2].innerText = Department.value;
        edditrow.cells[3].innerText = exp.value;
        edditrow.cells[4].innerText = email.value;
        edditrow.cells[5].innerText = number.value;
        edditrow.cells[6].innerText = roll(parseInt(exp.value));
}
else{
//create table datd and tr for tbody
let tr=document.createElement('tr')
let td1=document.createElement('td')
let td2=document.createElement('td')
let td3=document.createElement('td')
let td4=document.createElement('td')
let td5=document.createElement('td')
let td6=document.createElement('td')
let td7=document.createElement('td')
let td8=document.createElement('td')
let td9=document.createElement('td')

//delete button add
let delete_button=document.createElement('button');
//eddit button add
let eddit=document.createElement('Button')
eddit.innerText='Eddit';

delete_button.innerText='delete';
delete_button.addEventListener('click',()=>{
    tr.remove();
})

// give text from input in form
td1.innerText=name.value
td2.innerText=Employee_ID.value
td3.innerText=Department.value
td4.innerText=exp.value
td5.innerText=email.value
td6.innerText=number.value


// append eddit button td9
td9.append(eddit);
td7.innerText=roll(parseInt(exp.value))

//append delete button in td8
td8.appendChild(delete_button)
//apend all td
tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
tbody.append(tr)


//when click on eddit button data will fill in form of that row
eddit.addEventListener('click',()=>{
    name.value=td1.innerText
    Employee_ID.value=td2.innerText
    Department.value=td3.innerText
    exp.value=td4.innerText
    email.value=td5.innerText
    number.value=td6.innerText
    edditrow=tr;// data of tr will assign in eddiy row
   })



//addEvent listener on search box and we are doing Lower case of search and filter and also will do tr so no effect of uppercase
searchText.addEventListener('keyup',()=>{
        console.log("function called")
    
    let search= searchText.value.toLowerCase();
    let filter = departmentFilter.value.toLowerCase();



// Convert the rows in tbody to an array-like object
let rows = Array.from(tbody.querySelectorAll('tr'));
console.log(rows)
if (rows.length === 0) {
    return; // No rows to process, exit early
}

//now will run loop for row of tbody 
rows.forEach(row=>{
  
    //ensure that in tr have mor than 3 cell
    let cells = row.querySelectorAll('td');
    console.log(cells)
    if (cells.length < 3) {

        return; // This row doesn't have enough cells, skip it
    }

  // do lowercase of input tag for search in lowe case and also catch data from tr from tbody
    let employeeName = cells[0].innerText.toLowerCase();
    let employeeID = cells[1].innerText.toLowerCase();
    let employeeDepartment = cells[2].innerText.toLowerCase();
    
    if((employeeName.includes(search) ||employeeID.includes(search)) &&( filter==='' || employeeDepartment==filter ) ){
        row.style.display=''
    }else{
        row.style.display='none'
    }
    
    })
    })


}


// for expirence 
function roll(exp){
    if(exp>5){

        return 'Senior'
    }
    if(exp>1&& exp<5){
    
        return 'Junior'
    }
    if(exp<=1){
    
       return 'Fresher'
    }
}

// after click on submit clear all input boxes
name.value=''
Employee_ID.value=''
Department.value=''
exp.value=''
email.value=''
number.value=''
edditrow=null

})

