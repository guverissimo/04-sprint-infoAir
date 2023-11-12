import "react";
import { useEffect, useState } from "react";

const Mapa = () => {
  const IQ_AIR_API_KEY = "c32f2e08-592f-4650-ba76-b2b8b8f0f699";
  const [countries, setCountries] = useState([]);
  const [selecionado, setSelecionado] = useState()
  const [estado, setEstado] = useState()

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/countries?key=${IQ_AIR_API_KEY}`)
      .then((res) => res.json())
      .then((dados) => {
        let paises = [];
        const lista = dados.data;
        for (let index = 0; index < lista.length; index++) {
          const element = lista[index];
          paises.push(element.country);
        }
        setCountries(paises);
      });
  }, []);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/city?city=Sao Paulo&state=Diadema&country=USA&key=${IQ_AIR_API_KEY}`)
    .then((res) => {return res.json()})
    .then((data) => {
      console.log(data)
    })
  }, [])

  const handleChange = (e) => {
    setSelecionado(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  console.log(selecionado);
  console.log(countries);
  return (
    <>
      <div className="poluicao container">
        <select value={selecionado}>
          {countries.map((pais) => (
            <option key={pais} onChange={handleChange} value={pais}>{pais}</option>
          ))}
        </select>

        <form onSubmit={handleSubmit}>

          <input type="text"
          value={estado}
          />
          <button></button>
        </form> 
      </div>
    </>
  );
};

export default Mapa;
