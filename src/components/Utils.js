export function reset() {
  const template = document.querySelector("#template");
  if (template) {
    template.innerHTML = "";
  }
}

export function showPassword(input, show, hide) {
  input.type = ("type", "text");
  show.style.display = "none";
  hide.style.display = "block";
}

export function hidePassword(input, hide, show) {
  input.type = ("type", "password");
  hide.style.display = "none";
  show.style.display = "block";
}
