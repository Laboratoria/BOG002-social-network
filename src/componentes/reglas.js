export function VistaReglas() {
  const reglas = document.createElement("ol");

  const htmlReglas = ` <h1>Reglas de la comunidad HUC</h1>
    <li><details><summary>Las publicaciones deben llevar fuentes confiables</summary>
     <p> ¡No aceptaremos FAKE NEWS! Asegúrate de que tu publicación contenga una fuente confiable y veraz, no medios de comunicación desconocidos. (Como notas sobre astronomía que aseguran confirmación de la NASA... y ellos no han publicado sobre ello.)</p>
     </details></li>
     <li><details><summary>No aceptamos REPOST</summary>
     <p> Repost = Publicaciones repetidas ya aceptadas en el grupo.</p></details></li>
    <li><details><summary>No publicar contenido pornográfico</summary>
     <p>Ya sea de forma informativa, o relacionado con el Arte está prohibido debido a que las normas de Facebook no lo permite. Tampoco se acepta post con descripciones sexuales. </p></details></li>
    <li><details><summary> No publicar contenido sobre terrorismo</summary>
     <p>El contenido sobre accidentes causados por el hombre de forma intencional no se aceptarán en el grupo, mucho menos posts hablando sobre terroristas.</p></details></li>
     <li><details><summary>No publicar imágenes gráficas sobre círugias, gore</summary>
     <p>Las imagenes donde se muestran procesos sobre cirugías son sangrientas, y facebook puede tomarlas como contenido denunciable al ser tomado como gore. </p></details></li>
     <li><details><summary>El uso de groserias o racismo no será permitido</summary>
     <p>El racismo, la xenofobia o insultos no se permiten en el grupo. Puedes ganar hasta bloqueos por parte de fb si haces uso de ello en tus comentarios o publicaciones. </p></details></li>
     <li><details><summary>Prohibido el spam de grupos directos o ajenos a HUC</summary>
     <p>No se premite compartir enlaces de otros grupos o publicaciones, directos ajenos al nuestro o a los grupos de Holk. </p></details></li>
     <li><details><summary>No aceptamos publicaciones sobre drogas</summary>
     <p>Las publicaciones sobre drogas no van acorde con la extensión, además de ser contenido denunciable.</p></details></li>
    <li><details><summary>Sólo post de relevancia histórica o científica</summary><p>Las publicaciones que carezcan de ello no serán aceptadas, no queremos afectar la calidad del contenido del grupo </p></details></li>
    `;
  reglas.innerHTML = htmlReglas;
  return reglas;
}
