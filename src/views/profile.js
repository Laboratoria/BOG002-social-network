export function profile() {
    const container = `
        
  <style>

  .profileUser{
    width: 100vw;
    margin:0;
    padding:0;
    display: block;
    justify-content: space-between;
    font-family:'Roboto', sans-serif;
    font-weight: 600;
  }
  .imageProfile{
    width: 20vw;
    display:flex;
    margin: 3vh 0 0 39vw;
    }
  .nameUs{
    color:#06004B;
    margin: 2vh 0 0 31vw;
  }
  .curiosity{
    width: 75vw;
    height: 15vh;
    background-image: linear-gradient( #fdfcf4, #e0ac0080);
    display:block;
    margin: 2vh 0 1.5vh 12vw;
    border-radius:20px;
    text-align: left;
    padding: 0.1vh 0 0 3vw;
    color:#06004B;
  }
  .textAd{
    margin:1vh 0 1vh 2vw;
  }
  .titleProfile{
    width: 90vw;
    height: 7vh;
    color:white;
    background:#06004B;
    margin-left:5.5vw;
    border-radius:10px;
    padding:2vh 0 0 6vw;
  }
  .titleProfileDesk{
    display:none;
  }
  .listUser{
    border-left:#e0ac0080 1px solid;
    border-right:#e0ac0080 1px solid;
    border-bottom:#e0ac0080 1px solid;
    border-top:none;
    border-radius:10px;
    width: 70vw;
    height: 9vh;
    writing-mode:horizontal-tb;
    font-family:'Roboto', sans-serif;
    font-weight: 600;
    color:#06004B;
    background:none;
    position:absolute;
  }
  @media (min-width: 1200px) {
  .profileUser{
    width: 79vw;
    margin:0;
    margin-left: 21vw;
    display:block;
    aling-items:strech;
  }
  .imageProfile{
    display:none;
  }
  .nameUs{
    display:none;
  }
  .titleProfileDesk{
    display:block;
    width: 50vw;
    height: 7vh;
    color:white;
    background:#06004B;
    margin: 5vh 0 3vh 13vw;
    border-radius:10px;
    padding:2vh 0 0 6vw;
  }
  .curiosity{
    width: 23vw;
    height: 19vh;
    justify-content:center;
    margin: 1vh -12vw 1.5vh 14vw;
    border-radius:20px;
    text-align: left;
    padding: 0.1vh 0 0 1.5vw;
    color:#06004B;
    display:inline-block;
  }
  .textAd{
    margin:1.5vh 0 1vh 1vw;
  }
  .titleProfile{
    width: 50vw;
    height: 7vh;
    margin-left:13vw;
    border-radius:10px;
    padding:2vh 0 0 6vw;
  }
  .listUser{
    border-radius:10px;
    width: 20vw;
    height: 12vh;
    writing-mode:horizontal-tb;
    font-family:'Roboto', sans-serif;
    font-weight: 600;
    color:#06004B;
    background:none;
    position:absolute;
  }
  }

  </style>

  <section class="profileUser">
  <img class="imageProfile" src="assets/imagesIcon/UserBlueC.png">
  <p class="nameUs">"Nombre Usuario"</p>
  <p class="titleProfileDesk">Tu informacion</p>
  <div class="curiosity">
  <p class="textAd">Intereses</p>
  <textarea class="listUser" rows="10" cols="50" type="text"></textarea>
  </div>
  <div class="curiosity">
  <p class="textAd">Lugares visitados</p>
  <textarea class="listUser" rows="10" cols="50" type="text"></textarea>
  </div>
  <p class="titleProfile">Tus Post</p>

  </section>`;
    return container;
  }