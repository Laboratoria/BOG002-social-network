import { reset } from "./Utils.js";

export function Home() {
    reset();
    const template = document.createElement("div");
    template.insertAdjacentHTML(
        "afterbegin",
        `<div id="container" class"form">
        <img class="logo" src="./assets/gleam.svg" alt="Gleam logo">
        <p class="copy">Posting...</p>
    </div>`
    );
    return template;
}