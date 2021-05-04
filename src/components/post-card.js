const template = document.createElement('template');
template.innerHTML = `

    <style>
    .post-card{
        background: #fffbdb;
        width: 55vw;
        height: 40vh;
        position: fixed;
        z-index 100;
        margin-left:33vw;
        margin-top: 12vh;
        border-radius: 5px; 
    }
    .header-card{
        justify-content: left;
        background: #FFC300;
        margin:0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    </style>


    <div class="post-card">
        <p class="header-card">'holiii'<p>

    </div>
`;

class PostCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('post-card', PostCard);
