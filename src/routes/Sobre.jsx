import {} from "react";
import poluicaoImg from "../assets/poluicao.png";

const Sobre = () => {
  return (
    <>
      <div className="sobre-container container">
        <h1>Sobre a infoAIR</h1>
        <div className="content">
          <img src={poluicaoImg} alt="" />
          <p>
            Bem-vindo à InfoAir, empresa especializada em fornecer serviços
            confiáveis de monitoramento e avaliação da qualidade do ar para
            empresas e indivíduos preocupados com a saúde e o meio ambiente. Nós
            somos uma pequena empresa dedicada a ajudar nossos clientes a
            entender melhor a qualidade do ar em suas áreas de atuação. Fundada
            por um grupo de especialistas em saúde ambiental e tecnologia, nós
            nos esforçamos para fornecer informações precisas e acessíveis sobre
            os níveis de poluentes atmosféricos em diferentes ambientes. Com
            nossa tecnologia avançada de monitoramento da qualidade do ar, nós
            coletamos dados em tempo real sobre os níveis de poluentes em
            diversas regiões. Nossa equipe de especialistas em saúde ambiental
            analisa esses dados e os traduz em relatórios claros e objetivos
            para nossos clientes. Nós acreditamos que todos têm o direito de
            saber a qualidade do ar que estão respirando e como isso pode afetar
            sua saúde e o meio ambiente. Por isso, nos dedicamos a fornecer
            informações precisas e confiáveis sobre a qualidade do ar em
            diferentes ambientes, desde escritórios a áreas industriais. Na
            InfoAir, estamos comprometidos com a proteção da saúde e do meio
            ambiente. Nós acreditamos que nosso trabalho pode contribuir para um
            mundo mais saudável e sustentável. Entre em contato conosco para
            saber mais sobre nossos serviços de monitoramento e avaliação da
            qualidade do ar.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sobre;
