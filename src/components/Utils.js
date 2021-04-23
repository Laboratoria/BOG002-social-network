export function reset() {
  const template = document.querySelector("#template");
  if (template) {
    template.innerHTML = "";
  }
}
