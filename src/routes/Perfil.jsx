import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoPersonCircleSharp} from "react-icons/io5";
import WeatherAPI from "../components/WeatherAPI";

const Perfil = () => {
  const { id } = useParams();

  const [dados, setDados] = useState([]);
  const [endereco, setEndereco] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/usuarios/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDados(data);
      });
  }, [id]);

useEffect(() => {
    const cep = dados.endereco
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=> {return res.json()})
    .then((data) => {
        setEndereco(data)
    })
  }, [dados.endereco])

  return (
    <>
      <div className="perfil-container container">
        <header>
            <p>Bem-vindo(a) ao seu painel InfoAir  </p>
            <IoPersonCircleSharp className="perfil-img"></IoPersonCircleSharp>
            <h3>
                {dados.nome}
            </h3>
            <p className="perfil-info">
                {dados.email} <br />
                {dados.tel}<br />
                CEP: {dados.endereco}
            </p>
        </header>
        <div className="perfil-localizacao">
            <p>Sua localização: {endereco.localidade}</p>
        </div>
        <WeatherAPI cidade="Diadema" />
        
      </div>
    </>
  );
};

export default Perfil;
