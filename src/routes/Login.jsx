import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/styles/BotaoAnimado.css";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState();
  const [logado, setLogado] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/usuarios/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const buscarUsuario = () => {
    let usuarioLista = [];
    users.map((cli) => {
      usuarioLista.push([cli.email, cli.senha, cli.id]);
    });
    for (let index = 0; index < usuarioLista.length; index++) {
      if (usuarioLista[index].includes(user.email)) {
        setUserData(usuarioLista[index]);
        break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputEmail = user.email;
    const inputSenha = user.senha;
    const userID = userData[2];
    if (inputEmail == userData[0] && inputSenha == userData[1]) {
      alert("Sucesso");
      setLogado(true);
    } else {
      alert("Usuario nao encontrado");
    }
    if (logado) {
      window.location = `/perfil/${userID}`;
    }
  };

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="login-container">
        <div className="logar">
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input-box">
                <label>Email</label>
                <div className="wrapper">
                  <div className="box">
                    <input
                      type="email"
                      name="email"
                      value={users.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="input-box">
                <label>Senha</label>
                <div className="wrapper">
                  <div className="box">
                    <input
                      type="password"
                      name="senha"
                      onChange={handleChange}
                      value={users.senha}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" onClick={buscarUsuario}>
              Conectar
            </button>
          </form>
        </div>

        <Link className="link-cadastro" to="/cadastro">
          Cadastre- se
        </Link>
      </div>
    </>
  );
};

export default Login;
