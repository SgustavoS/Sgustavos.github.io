//funciones
async function mostrarUsuario() {

  try {


    const url = 'https://randomuser.me/api';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];
    foto.src = datos.picture.medium;
    Nombre.textContent = datos.name.first;
    Apellido.textContent = datos.name.last;
    Edad.textContent = datos.dob.age;
    Ciudad.textContent = datos.location.city;
    Nacionalidad.textContent = datos.location.country;
    Email.textContent = datos.email;
    Telefono.textContent = datos.cell;
  } catch (error) {
    console.log(error);
  }


}

document.addEventListener('DOMContentLoaded', mostrarUsuario);

//formulario

let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');


//refesco estado del formulario
form.addEventListener('submit', (e)=> {
  e.preventDefault();
});

//  reseteo 
resetBtn.addEventListener('click', (e)=> {
 let name = documet.getElementById('name');
 let email = documet.getElementById('email');
 let message = documet.getElementById('message');



 //seteo valores

 name.value='';
 email.value='';
 message.value='';
});



 // envio datos
 sendBtn.addEventListener('click', (e)=> {
  let name = documet.getElementById('name');
  let email = documet.getElementById('email');
  let message = documet.getElementById('message');

  // valor localstorage
  name = name.value;
  localStorage.setItem('name',name);

  email = email.value;
  localStorage.setItem('email',email);

  message = message.value;
  localStorage.setItem('message', message);


});