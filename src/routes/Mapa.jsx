import "react";
import { useEffect, useState } from "react";

const Mapa = () => {
  const IQ_AIR_API_KEY = "f15342aa-55e3-4d38-b646-99304d0ee9ed";
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch(`http://api.airvisual.com/v2/countries?key=${IQ_AIR_API_KEY}`)
    .then((res) =>   res.json())
    .then((data) => {
      const lista = data.data;
      for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        countries.push(element.country);
      }
    });
    setCountries([...countries, setCountries])
  }, [])

  console.log(countries)

  return (
    <>
      <h1>Oi </h1>
    </>
  );
};

export default Mapa;
