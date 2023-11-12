import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {

    const {id} = useParams()

    const [dados, setDados] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => {return res.json() })
        .then((data) => {
            setDados(data)
        })
    }, [])
        

    return (
        <> 
            <div className="perfil">
                {dados.nome}
                {dados.email}
                {dados.tel}
                {dados.endereco}
            </div>
        </>
    )
}

export default Perfil