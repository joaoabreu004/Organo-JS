
// function CampoTexto(){

//}

// import { useState } from 'react';
import './CampoTexto.css'; 

//ARROW FUNCTION
const CampoTexto = (props) => {

    // let nominho = 'João Vitor'

    //CONFORME O VALOR MUDA, O MEU ESTADO MUDA JUNTO
    //E MEU ESTADO MUDANDO JUNTO O REACT SABE QUE ELE DEVE REEINDERIZAR O COMPONENTE 
    //const [valor, setValor] = useState('João Vitor'); 

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value); 
    }

    const placeholderModificada = `${props.placeholder}...`
    
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} value={props.valor}  required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto; 