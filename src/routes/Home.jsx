import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  const API_KEY = "43be990ebe164cdbb43163721230911";
  
  let [local, setLocal] =useState({
    'pais': '',
    'nome': '',
  })

  let [wheater, setWheater] = useState({
    'temperatura': '',
    'sensacao': '',
    'data': '',
    'umidade': ',',
    'vento': ',',
    'condicao': {
      'texto': '',
      'icone': '',
    }
  })


  fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Sao Paulo&aqi=no&lang=pt`)
  .then((res)=> res.json())
  .then((data) => {
    setLocal({...local, 'pais': data.location.country, 'nome': data.location.name })
    setWheater({...wheater, 
      'temperatura': data.current.temp_c, 
      'sensacao': data.current.feelslike_c, 
      'data': data.current.last_updated, 
      'umidade': data.current.humidity, 
      'vento': data.current.wind_kph, 
      'condicao': {
        'texto': data.current.condition.text,
        'icone': data.current.condition.icon,
      }
    })
  })

  return (
  <>
    <div className="container home-container">
      <header className="header">
        <FaLocationDot></FaLocationDot>
        <p>{local.nome}</p>
      </header>
      <div className="temperatura">
        <div className="main-temp">
          <h1>{wheater.temperatura}</h1>
          <img src={wheater.condicao.icone} alt="Icone condicao" />
        </div>
        <h3>{wheater.condicao.texto}</h3>
      </div>
      <div className="weather-infos">
        <h5>Ultima atualização: {wheater.data}</h5>
        <div className="sub-infos">
          <div className="box">
            <h4>Sensação</h4>
            <h4>{wheater.sensacao}</h4>
          </div>
          <div className="box">
            <h4>Humidade</h4>
            <h4>{wheater.umidade}</h4>
          </div>
          <div className="box">
            <h4>Valocidade do Vento</h4>
            <h4>{wheater.vento}</h4>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;
