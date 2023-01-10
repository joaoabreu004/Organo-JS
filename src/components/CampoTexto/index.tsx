// function CampoTexto(){

//}

// import { useState } from 'react';
import React from "react";
import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
}

//ARROW FUNCTION
const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false}: CampoTextoProps) => {
  // let nominho = 'João Vitor'

  //CONFORME O VALOR MUDA, O MEU ESTADO MUDA JUNTO
  //E MEU ESTADO MUDANDO JUNTO O REACT SABE QUE ELE DEVE REEINDERIZAR O COMPONENTE
  //const [valor, setValor] = useState('João Vitor');

  const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(e.target.value);
  };

  const placeholderModificada = `${placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        onChange={aoDigitado}
        value={valor}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
