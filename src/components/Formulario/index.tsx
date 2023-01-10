import { useState } from 'react'; 
import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { IColaborador } from '../../shared/interfaces/IColaborador';



interface FormularioProps{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void; 
    times: string[]

}

const Formulario = (props: FormularioProps) => {


    //VARÍÁVEIS QUE POSSO PEGAR ESSES VALORES E TRABALHAR COM ELES 
    //COMUNICAÇÃO ENTRE OS COMPONENTES
    const [nome, setNome] = useState(''); 
    const [cargo, setCargo] = useState(''); 
    const [imagem, setImage] = useState(''); 
    const [time, setTime] = useState('');   



    //OBJETO
    const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem,
            time
        }); 
        setNome('');
        setCargo('');
        setImage('');
        setTime('');
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
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times} 
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
