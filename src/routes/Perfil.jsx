import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {

    const {id} = useParams()

    const [dados, setDados] = useState([])
    const [endereco, setEndereco] = useState({
        'rua': '',
        'bairro': '',
        'cidade': '',
        'estado': '',
    })

    useEffect(() => {
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => {return res.json() })
        .then((data) => {
            setDados(data)
        })
    }, [])

    useEffect(()=> {
        const cep= dados.endereco
        fetch(`viacep.com.br/ws/${cep}/json/`)
        .then((res)=> {return res.json()})
        .then((data) => {
            setEndereco({
                'rua': data.logradouro,
                'bairro': data.bairro,
                'cidade': data.localidade,
                'estado': data.uf
            })
        })
    }, [])
        

    return (
        <> 
            <div className="perfil">
                {dados.nome}
                {dados.email}
                {dados.tel}
                {dados.endereco}
                {endereco.cidade}
            </div>
        </>
    )
}

export default Perfil