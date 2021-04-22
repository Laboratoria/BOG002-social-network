export function Landing() {

    const template = document.createElement("div")
    console.log("holiiii");
    template.insertAdjacentHTML('afterbegin',
        `<div id="container">
        <img src="./assets/gleam.svg" alt="Gleam logo">
        <div class="btns-container-mobile">
            <a href="#/register" id="signUp">Enjoy Gleam</a>
            <a href="#/login" id="logIn">Log In</a>
        </div>
    </div>
    `);

    //DOM

    /*const btnRegister = document.getElementById("signUp");
    console.log(btnRegister);

    btnRegister.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.assign('#/register');

    });*/


    return template;
}