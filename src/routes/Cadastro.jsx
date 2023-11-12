import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/styles/BotaoAnimado.css";

const Cadastro = () => {
  let { id } = useParams();
  const [novo, setNovo] = useState({
    id,
    nome: "",
    cpf: "",
    email: "",
    tel: "",
    endereco: "",
    senha: "",
  });

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/usuarios`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Cadastrado com Sucesso")
        window.location = '/login'
      });
  };


  return (
    <>
      <div className="cadastro-container container">
        <h1>Complete as informacoes</h1>
        <form onSubmit={handleSubmit}>
          <div className="wrapper">
            <div className="box">
              <input
                type="text"
                name="nome"
                value={novo.nome}
                placeholder="Nome completo"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="box">
              <input
                type="text"
                name="cpf"
                value={novo.cpf}
                placeholder="Digite seu CPF"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="box">
              <input
                type="text"
                name="email"
                value={novo.email}
                placeholder="E-mail"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="box">
              <input
                type="tel"
                name="tel"
                value={novo.tel}
                placeholder="Numero de telefone"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="box">
              <input
                type="text"
                name="endereco"
                value={novo.endereco.cep}
                placeholder="CEP (01310930)"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="box">
              <input
                type="password"
                name="senha"
                value={novo.senha}
                placeholder="Escolha uma senha"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
