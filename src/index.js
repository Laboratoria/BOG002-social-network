// eslint-disable-next-line import/no-cycle
// import { App } from "./app/App.js";

import { Router } from "./components/Router.js";

export function App() {
  Router();
}

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);
