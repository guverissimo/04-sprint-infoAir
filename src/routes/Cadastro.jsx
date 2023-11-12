import { useState } from "react";
import { useParams } from "react-router-dom";

const Cadastro = () => {
  let { id } = useParams();
  const [novo, setNovo] = useState({
    id,
    nome: "",
    cpf: "",
    email: "",
    tel: "",
    endereco: {
      cep: "",
    },
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
      });
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/usuarios`, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(novo),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // },[]);

  return (
    <>
      <div className="cadastro">
        <h1>Complete as informacoes</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            value={novo.nome}
            placeholder="Nome completo"
            onChange={handleChange}
          />
          <input
            type="text"
            name="cpf"
            value={novo.cpf}
            placeholder="Digite seu CPF"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={novo.email}
            placeholder="E-mail"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="tel"
            value={novo.tel}
            placeholder="Numero de telefone"
            onChange={handleChange}
          />
          <input
            type="text"
            name="endereco"
            value={novo.endereco.cep}
            placeholder="CEP"
            onChange={handleChange}
          />
          <input
            type="password"
            name="senha"
            value={novo.senha}
            placeholder="Escolha uma senha"
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
