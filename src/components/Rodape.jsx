import {} from "react";
import logo from "../assets/logo.png";
import appStore from "../assets/appStore.png";
import googlePlay from "../assets/googlePlay.png";

import { FaFacebookF, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa6";

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
                <FaFacebookF></FaFacebookF>
              </a>
            </div>
            <div className="rede">
              <a href="https://www.instagram.com/" target="blank">
                <FaInstagram></FaInstagram>
              </a>
            </div>
            <div className="rede">
              <a href="https://www.tiktok.com/pt-BR/" target="blank">
                <FaTiktok></FaTiktok>
              </a>
            </div>
            <div className="rede">
              <a href="https://web.whatsapp.com/" target="blank">
                <FaWhatsapp></FaWhatsapp>
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
