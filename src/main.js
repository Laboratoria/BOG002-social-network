import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/registroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';

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
