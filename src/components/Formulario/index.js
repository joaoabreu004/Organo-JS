import { useState } from 'react'; 
import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {

    // const times = [
    //     'Programação', 
    //     'Front-end', 
    //     'Data Science', 
    //     'DevOps', 
    //     'Mobile', 
    //     'Inovação e Gestão'
    // ]


    //VARÍÁVEIS QUE POSSO PEGAR ESSES VALORES E TRABALHAR COM ELES 
    //COMUNICAÇÃO ENTRE OS COMPONENTES
    const [nome, setNome] = useState(''); 
    const [cargo, setCargo] = useState(''); 
    const [imagem, setImage] = useState(''); 
    const [time, setTime] = useState('Programação'); 



    //OBJETO
    const aoSalvar = (e) => {
        e.preventDefault(); 
        props.aoColaboradorCadastrado({
            nome: nome, 
            cargo: cargo, 
            imagem: imagem,
            time: time
        }); 
        setNome('');
        setCargo('');
        setImage('');
    }

    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do colaborador!</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Imagem de perfil"
                    valor={imagem}
                    aoAlterado={valor => setImage(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={props.nomeDosTimes} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;
