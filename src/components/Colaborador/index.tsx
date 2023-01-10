import './Colaborador.css'



interface ColaboradorProps{
    nome: string;
    imagem: string;
    cargo: string;
    corDeFundo: string;
}



//DESESTRUTURANDO OBJETO -> JAVASCRIPT SEM USAR PROPS
const Colaborador = ({nome, imagem, cargo, corDeFundo}: ColaboradorProps) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{background: corDeFundo}}>
                <img src={imagem} alt={nome} />

            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;