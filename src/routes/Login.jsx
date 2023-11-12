import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState();

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
    console.log(userData);
    if (inputEmail == userData[0] && inputSenha == userData[1]) {
      alert("Logado");
    } else {
      alert("Usuario nao encontrado");
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
                <input
                  type="email"
                  name="email"
                  value={users.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <label>Senha</label>
                <input
                  type="password"
                  name="senha"
                  onChange={handleChange}
                  value={users.senha}
                />
              </div>
            </div>
            <button type="submit" onClick={buscarUsuario}>
              Conectar
            </button>
          </form>
        </div>
        <Link className="link-cadastro" to="/cadastro">Cadastre- se</Link>
      </div>
    </>
  );
};

export default Login;
