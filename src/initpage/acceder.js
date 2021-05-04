import {inicioFirebase,observador} from '/firebase/firebase.js'
export function ingreso() {
    const form = document.getElementById("formularioInicio");
    form.addEventListener("submit", (e) => {
      console.log(e);
        e.preventDefault();
      const mail = document.getElementById("usser").value;
      const contraseña = document.getElementById("password").value;
      inicioFirebase(mail,contraseña)

    });
  }
   
  observador();
console.log("estoy probando esta rama,ojala no se me haya desorganizado la modularizacion")

