//variables
const Datos_principales = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const Nombre = document.querySelector('#Nombre');
const Apellido = document.querySelector('#Apellido');
const Edad = document.querySelector('#Edad');
const Ciudad = document.querySelector('#Ciudad');
const Nacionalidad = document.querySelector('#Nacionalidad');
const Email = document.querySelector('#Email');
const Telefono = document.querySelector('#Telefono');




//funciones
const mostrarUsuario =async () => {

   try {

   
     const url = 'https://randomuser.me/api';
     const respuesta = await fetch(url);
     const {results} = await respuesta.json();
     const datos = results[0];
    foto.src= datos.picture.medium;
    Nombre.textContent= datos.name.first
    Apellido.textContent= datos.name.last
    Edad.textContent= datos.dob.age
    Ciudad.textContent= datos.location.city
    Nacionalidad.textContent= datos.location.country
    Email.textContent= datos.email
    Telefono.textContent= datos.cell
   } catch (error) {
    console.log(error);
 } 
     

}

document.addEventListener('click' , mostrarUsuario);