var wrapper = document.getElementById('wrapper')
var login = document.getElementById('login-link')
var register = document.getElementById('register-link');
var btnLogin = document.getElementById('btnLogin');
var closeIcon = document.getElementById('close-icon');
register.addEventListener('click',()=> {
    wrapper.classList.add('active');
});
// function registerClick(){
//     wrapper.classList.add('active');
// }
login.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('show');
});
closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('show');
});