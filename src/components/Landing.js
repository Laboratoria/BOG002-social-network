export function Landing() {
    reset();
    const template = document.createElement("div");
    template.insertAdjacentHTML(
        "afterbegin",
        `<div id="container">
      <img class="logo" src="./assets/gleam.svg" alt="Gleam logo">
        <p class="copy"> Welcome, we're the best and inclusive app in the world just 
        created for your Freedom, inclusion, and love. </p>
      <div class="btns-container-mobile">
          <button id="signUp">Enjoy Gleam</button>
          <button id="logIn">Log In</button>
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


    export function random() {
        const btnRegister = document.getElementById("signUp");
        btnRegister.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.assign("#/register");
        });

        const btnLogin = document.getElementById("logIn");
        btnLogin.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.assign("#/login");
        });
    }