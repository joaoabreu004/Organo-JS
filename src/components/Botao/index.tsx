import './Botao.css';
import React from 'react'; 

// Tem o mesmo nome que o componente, porém adicionamos o Props
// Utilizando a tipagem com Inteface
interface BotaoProps{
    children: React.ReactElement | string
}


const Botao = (props: BotaoProps) => {
    return(
        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao;