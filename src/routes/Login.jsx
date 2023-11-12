import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [dados, setDados ] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/usuarios/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      users.map((use) => {
        let email = use.email;
        let senha = use.senha;
        let inputUserSenha = user.senha;
        let inputUserEmail = user.email;
        if (inputUserEmail == email && inputUserSenha == senha) {
          users.map((cli, index) => {
            if (cli.email == inputUserEmail){
                window.location= `/perfil/${users[index].id}`
            }
          })
          
        }else{
            alert("Credenciais incorretas")
        }
      });
    }
  };

  function testar() {
    console.log(dados)
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="login">
        <div className="logar">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={users.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="senha"
              onChange={handleChange}
              value={users.senha}
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
        <Link to="/cadastro">Cadastre- se</Link>
        <button onClick={testar}>Teste</button>
      </div>
    </>
  );
};

export default Login;
