const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

//Impede o envio do formulário
form.addEventListener('submit' ,function(event){
   event.preventDefault(); 

   
   const emailvalor = email.value;
   console.log(emailvalor)
   //validar email
   const isValid = EmailValidate(emailvalor);

   if(isValid) {
    alert('valido')

   } else {
    alert('invalido')
   }

});  


// função valida email

const EmailValidate = (emailvalor) => {
   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   return regex.test(emailvalor);
}



