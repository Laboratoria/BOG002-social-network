import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario,registerUSer } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';
console.log(firebase);
const rootHtml = document.getElementById('root');
const appenPantallaInicio = rootHtml.appendChild(pantallaInicio());

const bntRegistro = document.getElementById('btnRegistrate');
const btnIniciarSesion = document.getElementById('btnIniciarSesion');
const mostrarLogin = () => {
  const appPantallaLogin = rootHtml.appendChild(inicioSesion());
  appenPantallaInicio.style.display = 'none';
  appPantallaLogin.style.display = 'flex';
};

const mostrarRegistro = () => {
  const appePantallaRegistro = rootHtml.appendChild(registroUsuario());
  appenPantallaInicio.style.display = 'none';
  appePantallaRegistro.style.display = 'flex';
};
bntRegistro.addEventListener('click', mostrarRegistro);
btnIniciarSesion.addEventListener('click', mostrarLogin);

// aqui vamos a traer la información del registro 41:51
const email = document.getElementById("email");
const password = document.getElementById("password");
