let dob = document.getElementById('dob');
let currDate = document.getElementById('currDate');
let calAge = document.getElementById('calAge');
let displayAge = document.getElementById('displayage');
let age = document.getElementById('age');
let today = new Date();
currDate.innerHTML =`Today's Date is :${today.toLocaleDateString("en-US")}`;

calAge.addEventListener('click', ()=>{
    let dobValue = new Date(dob.value);
    let ageValue = today.getFullYear() - dobValue.getFullYear();
    let month = today.getMonth() - dobValue.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < dobValue.getDate())){
        ageValue--; 
    }
    displayAge.style.visibility = "visible";
    age.innerText = `Your age is ${ageValue} years old`;
});