import React from "react";

export default function Sidebar() {
  const allSugestao = [
    { image: "img/butter.png", nome: "goodboy" },
    { image: "img/joey.png", nome: "joooooey" },
    { image: "img/vance.jpg", nome: "vvaggoner" },
    { image: "img/jurg.jpg", nome: "cloooners" },
    { image: "img/ralph.jpg", nome: "ralfstilton" }
  ];

  return (
    <div class="barra-lateral">
      <div class="fixed">
        <Usuario nome="bojack" image="img/bojack.jpg" />
        <div class="para-voce">
          <div>
            <h6>Sugestões para você</h6>
          </div>
          <div>
            <p>
              <b>Ver tudo</b>
            </p>
          </div>
        </div>
        <div class="sugestoes">{allSugestao.map(Sugestao)}</div>
        <div class="copyright">
          <div>
            <p>
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
              • Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
          </div>
          <div>
            <p>© 2022 INSTAGRAM DO FACEBOOK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="icone-nome">
        <div class="icone-sugestao">
          <img src={props.image} alt="img" />
        </div>
        <div class="nome-sugestao">
          <p>
            <h5>{props.nome}</h5>
          </p>
          <p>
            <h6>Segue você</h6>
          </p>
        </div>
      </div>
      <Follow />
    </div>
  );
}

function Usuario(props) {
  return (
    <div class="user">
      <div>
        <img src={props.image} alt="img" />
      </div>
      <div>
        <b>
          <h5>{props.nome}</h5>
        </b>
        <h6>{props.nome}</h6>
      </div>
    </div>
  );
}

function Follow() {
  const [follow, setfollow] = React.useState("Seguir");
  function following() {
    if (follow === "Seguir") {
      setfollow("Seguindo");
    } else {
      setfollow("Seguir");
    }
  }

  return (
    <div class="seguir-sugestao" onClick={following}>
      <p>{follow}</p>
    </div>
  );
}
