import {} from 'react'
import { FaBriefcaseMedical, FaMaskFace } from "react-icons/fa6";

const Saude = () => {
    return (
        <>
            <div className="saude-container container">
                <div className="saude">
                    <header className='header'>
                        <FaBriefcaseMedical className='icon'></FaBriefcaseMedical>
                        <h1>Saúde</h1>
                    </header>
                    
                    <div className="textos">
                        <p>A saúde respiratória é fundamental para garantir uma vida saudável e ativa. Infelizmente, a poluição do ar é um fator que pode comprometer essa saúde, causando doenças respiratórias em pessoas expostas a níveis elevados de poluentes. As doenças respiratórias são um grupo de condições que afetam o sistema respiratório, incluindo as vias aéreas, pulmões e outros órgãos envolvidos na respiração. </p>
                        <p>A exposição prolongada à poluição do ar pode causar diversos problemas de saúde respiratória, incluindo asma, bronquite crônica, enfisema e câncer de pulmão. A asma é uma das doenças respiratórias mais comuns causadas pela poluição do ar. Ela é caracterizada pela inflamação das vias aéreas, o que causa dificuldade para respirar, tosse, chiado no peito e aperto no peito. A asma pode ser desencadeada pela exposição a poluentes do ar, como partículas finas, ozônio e dióxido de nitrogênio. A bronquite crônica é outra condição respiratória que pode ser causada pela poluição do ar. </p>
                        <p>Ela é caracterizada pela inflamação e estreitamento dos tubos bronquiais, o que dificulta a respiração. Os sintomas da bronquite crônica incluem tosse persistente, produção de muco, chiado no peito e falta de ar. O enfisema é uma doença pulmonar progressiva que pode ser causada pela exposição a poluentes do ar, como fumaça de cigarro e poluentes industriais. Ela é caracterizada pela destruição gradual dos sacos de ar nos pulmões, o que dificulta a respiração e pode causar falta de ar, tosse crônica e fadiga. 
</p>
                        <p>Por fim, o câncer de pulmão é uma condição grave que pode ser causada pela exposição a poluentes do ar, como partículas finas e gases tóxicos. Os sintomas do câncer de pulmão podem incluir tosse persistente, dor no peito, perda de peso inexplicável e dificuldade para respirar. Em resumo, a poluição do ar pode ter um impacto significativo na saúde respiratória, causando uma variedade de doenças respiratórias graves. </p>
                        <p>É importante tomar medidas para reduzir a exposição a poluentes do ar, como evitar áreas com tráfego intenso, manter ambientes internos bem ventilados e usar equipamentos de proteção adequados em ambientes de trabalho com riscos ambientais. Além disso, é essencial buscar ajuda médica caso ocorram sintomas respiratórios preocupantes.</p>
                    </div>
                </div>
                <div className="prevencao">
                    <header className='header'>
                        <FaMaskFace className='icon'></FaMaskFace>
                        <h1>Prevenção</h1>
                    </header>
                    <div className='textos'>
                        <h3>Certas doenças respiratórias podem ser causadas pela poluição do ar. Aqui estão algumas dicas para prevenir doenças respiratórias relacionadas à poluição do ar</h3>
                        <ol>
                            <li>Monitore a qualidade do ar: Fique atento aos alertas de qualidade do ar e evite sair ao ar livre quando a qualidade do ar estiver ruim. Você pode verificar a qualidade do ar em tempo real em sites governamentais.</li>
                            <li>Use uma máscara: Se você precisa sair em um dia de qualidade do ar ruim, use uma máscara N95 para se proteger contra as partículas no ar.</li>
                            <li>Use um purificador de ar: Um purificador de ar com filtro HEPA pode ajudar a remover as partículas finas do ar dentro de casa, melhorando a qualidade do ar que você respira.</li>
                            <li>Mantenha sua casa limpa: Evite o acúmulo de poeira e ácaros em casa, limpando regularmente e usando filtros de ar nos sistemas de aquecimento e refrigeração.</li>
                            <li>Pare de fumar: Fumar pode danificar os pulmões e torná-los mais vulneráveis a doenças respiratórias. Se você é fumante, tente parar.</li>
                            <li>Mantenha-se saudável: Mantenha um estilo de vida saudável com uma dieta equilibrada, exercícios regulares e boas práticas de sono para manter o seu sistema respiratório forte e resistente a doenças.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Saude