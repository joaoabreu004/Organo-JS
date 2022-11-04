import { Fragment } from 'react' 
import './Banner.css'
function Banner() {
    // JSX -> Parece HTML, mas não é!
    return (
        <>
            <header className='banner'>
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo." />
            </header>
            <h1>TESTE</h1>
        </>
    )
}
export default Banner