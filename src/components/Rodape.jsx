import {} from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/icons8-facebook-50.png";
import instagram from "../assets/icons8-instagram-50.png";
import tiktok from "../assets/icons8-tiktok-50.png";
import whatsapp from "../assets/icons8-whatsapp-50.png";
import appStore from "../assets/appStore.png";
import googlePlay from "../assets/googlePlay.png";

const Rodape = () => {
  return (
    <>
      <div className="container rodape">
        <header>
          <img className="logo" src={logo} alt="" />
          <div className="redes">
            <div className="rede">
              <a
                href="https://www.facebook.com/fiap?ref=embed_page"
                target="blank"
              >
                <img src={facebook} alt="Facebook" />
              </a>
            </div>
            <div className="rede">
              <a href="https://www.instagram.com/" target="blank">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            <div className="rede">
              <a href="https://www.tiktok.com/pt-BR/" target="blank">
                <img src={tiktok} alt="" />
              </a>
            </div>
            <div className="rede">
              <a href="https://web.whatsapp.com/" target="blank">
                <img src={whatsapp} alt="" />
              </a>
            </div>
          </div>
        </header>
        <div className="download">
          <h1>Baixe nosso App ;)</h1>
          <div className="lojas">
            <a href="https://www.apple.com/br/app-store/" target="blank">
              <img src={appStore} alt="Baixe pela AppStore" />
            </a>
            <a href="https://play.google.com/store/games" target="blank">
              <img src={googlePlay} alt="Baixe pela Google Play" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rodape;
