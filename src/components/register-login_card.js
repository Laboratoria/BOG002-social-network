export function card(){
    const $divr = document.createElement("div"); 
    $divr.classList.add('cardContainer'); 
    const $Logo = document.createElement("img");  
    const $background = document.createElement("img");
    $Logo.classList.add("imgLogo");
    $background.classList.add("imgTrama");
    $Logo.setAttribute('src', "assets/imagesIcon/Complete_logo.png" );
    $background.setAttribute('src', "assets/imagesIcon/textureGray.png");
    $divr.appendChild($background);
    $divr.appendChild($Logo);
    return $divr;
}