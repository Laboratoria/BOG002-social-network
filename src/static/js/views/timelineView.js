export const renderTimeline = () => {
  let html = `
      <section id="muro">

      <header>
        <img class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
        <input type="text" maxlength="100" autocomplete="off">
        <img id=icon-lupa src="static/images/icons/icon-lupa.png">
      </header>

      <div id="map">
        <iframe id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3928106861!2d-74.24789140391782!3d4.648625932164217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1618855424331!5m2!1ses!2sco"
          style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>

      <footer>
        <img class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
      </footer>

    </section>`;

  let div = document.createElement('div');
  div.innerHTML = html;

  return div
}