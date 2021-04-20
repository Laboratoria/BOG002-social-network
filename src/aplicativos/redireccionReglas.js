/* eslint-disable quotes */
import VistaReglas from "../componentes/reglas.js";

export default function irReglas() {
  window.location = "#reglas";
  if (document.getElementById("main").hasChildNodes()) {
    document
      .getElementById("main")
      .removeChild(document.getElementById("main").childNodes[0]);
    document.getElementById("main").appendChild(VistaReglas());
  }
}
