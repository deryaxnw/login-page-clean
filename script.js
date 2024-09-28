// função valida email
const EmailValidate = (emailvalor) => {
   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   return regex.test(emailvalor);
}
const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const span = document.getElementById('mensagem')
const secondspan = document.getElementById('mensagem2')
const icon = document.getElementById('mode_icon')

//Impede o envio do formulário -----------
form.addEventListener('submit' ,function(event){
   event.preventDefault(); 
// ---------------------------------------
// capturar valor
const emailvalor = email.value;

//validar email
const isValid = EmailValidate(emailvalor);

if(isValid) {
email.style.border = "1px solid green"
span.style.display = "none"

} else {
   email.style.border = "1px solid red"
   span.style.display = "block"
   span.style.color = "red"
}

const senhaValidate = (senhavalor) => {
   if(password.value.length < 8){
      password.style.border = "1px solid red"
     secondspan.style.display = "block"
      secondspan.style.color = "red"

   } else {
      password.style.border = "1px solid green"
      secondspan.style.display = "none"
   }
}
   

   const senhavalor = password.value;

   const passvalid = senhaValidate(senhavalor)
   
   if(passvalid){
      return senhaValidate
   } else {
      return senhaValidate
   }

});  



icon.addEventListener('click' , () => {


   if (icon.classList.contains('fa-moon')) {

      icon.classList.remove('fa-moon');

      icon.classList.add('fa-sun');


      form.classList.add('dark')
      return;
   }
   icon.classList.add('fa-moon');
   icon.classList.remove('fa-sun')

   form.classList.remove('dark');
});



