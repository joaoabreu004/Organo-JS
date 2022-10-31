import './Formulario.css'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className="formulario" >
            <form>
                <h2>Preencha os dados para criar os dados do colaborador!</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Imagem de perfil" />
            </form>
        </section>
    )
}

export default Formulario;
