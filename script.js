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

const credenciais = [];



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
   // VALIDANDO A SENHAA
const senhaValidate = (senhavalor) => {

   if(senhavalor.value.length < 8){
      senhavalor.style.border = "1px solid red"
     secondspan.style.display = "block"
      secondspan.style.color = "red"
      return false

   } else {
      senhavalor.style.border = "1px solid green"
      secondspan.style.display = "none"
      return true
      
   }
}
   

const senhavalor = password.value;

const passvalid = senhaValidate(password)

if (passvalid) {
   const users = {
      id: userId++,
      email: emailvalor ,
      senha: senhavalor
   } 
   guardarDados(users.id, users )  
} 



Dados(emailvalor,senhavalor);

  
   // ENVIANDO DADOS PARA O LOCAL STORAGE//

      this.reset();
 
});  

function mostrarDados(){
   for(let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      console.log(key , value)
   }
}




const guardarDados = (id, value) => {
   const uniqueKey = `user_${id}`
   localStorage.setItem(uniqueKey, JSON.stringify(value));
};

let userId = 0;


function Dados(emailvalor, senhavalor){
   const users = {
      email: emailvalor,
      senha: senhavalor
   }
   
   
   credenciais.push(users)
   
};    





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



  