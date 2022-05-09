export default function Header() {
  return (
    <div>
      <div class="fix">
        <div class="top-borda">
          <div class="top-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="https://i.postimg.cc/8zJnkwvs/logo.png" alt="img" />
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>

          <div class="top-desktop">
            <div>
              <ion-icon name="logo-instagram"></ion-icon>
              <div class="top-div"></div>
              <img src="https://i.postimg.cc/8zJnkwvs/logo.png" alt="img" />
            </div>
            <div class="pesquisa-barra">
              <input type="text" placeholder="Pesquisar" />
            </div>
            <div>
              <ion-icon name="paper-plane-outline"></ion-icon>
              <ion-icon name="compass-outline"></ion-icon>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
