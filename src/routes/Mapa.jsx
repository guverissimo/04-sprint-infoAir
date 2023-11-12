import "react";
import mapa from '../assets/Mapa-Poluicao.png'

const Mapa = () => {
  return (
    <>

      <div className="poluicao-container">
        <img src={mapa} alt="Mapa poluicao Mundial" className="w-100"/>
      </div>

    </>
  );
};

export default Mapa;
