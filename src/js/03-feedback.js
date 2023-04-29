let form = document.querySelector('.feedback-form');
let throttle = require('lodash.throttle');
let user = {
    email:null,
    message:null
}  
let sesion;

if(localStorage.getItem('feedback-form-state') != null){
    sesion = JSON.parse(localStorage.getItem('feedback-form-state'));
    form.email.value = sesion.email;
    form.message.value = sesion.message;
}

form.addEventListener('input', throttle((e)=>{
    e.preventDefault();
    user.email = form.email.value;
    user.message = form.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(user));    
},500));

form.addEventListener('submit', showConsole)

function showConsole(event){
    event.preventDefault();
    const {elements:{email, message}} = event.currentTarget;
    console.log('Email:', email.value);
    console.log('Messge:', message.value);
    event.currentTarget.reset();
}