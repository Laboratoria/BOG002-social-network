/* eslint-disable no-unused-expressions */
export function gridImage($containerGeneral) {
  const images = ['14-cartagena.jpg', '6-Guatavita.jpg', '18-rio-amazonas.jpg', '9-tatacoa.jpg', '5-caballo.jpg',
    '19-tayrona.jpeg', '2-coveñas.jpg', '11-bandera.jpg', '17-Santuario-las-lajas.jpg', '21-caño_cristales.jpg',
    '3-jeep_huilense.jpg', '12-llanos.jpg', '4-leopardo.jpg', '7-san_andres.jpeg', '8-cartagena.jpeg', '1-bog.jpg',
    '13-bici.jpg', '10-vista.jpg', '15-cali.jpg', '16-ballenas.jpg', '20-medellin.jpg', '22-negrita_cartagena.jpg'];
  images.map((item, index) => {
    const $div = document.createElement('div');
    const $image = document.createElement('img');
    const $src = `assets/imagesPrincipal/${item}`;
    $image.setAttribute('src', $src);
    index < 10 ? $image.classList.add('imageMobile') : $image.classList.add('hideElement');
    $div.classList.add('photograph');
    $div.appendChild($image);
    $containerGeneral.appendChild($div);
    return $containerGeneral;
  });
}
