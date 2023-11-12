import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    
    let isLogado = false
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:5000/usuarios/`)
        .then((res) => { return res.json()})
        .then((data) => {
            setUsers(data)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        {users.map((use) => {
            let email = use.email
            let senha = use.senha
            let inputUserSenha = user.senha
            let inputUserEmail = user.email
            
            if(inputUserEmail == email && inputUserSenha == senha){
                return (isLogado = true)
            }else{
                alert("Incorreto")
            }
        })}
    }
    console.log(isLogado)
    function handleChange(e){
        setUser({ ...user, [e.target.name]: e.target.value });

    }
    if(!isLogado) {
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
                    <Link to='/cadastro'>Cadastre- se</Link>   
                </div>
            </>
        )
    }

    return (
        <>
            LOgado
        </>
    )
    
}

export default Login