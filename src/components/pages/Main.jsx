import Plano from '../../img/plano.png'
import '../../css/main.css'
import ButtonLink from '../ButtonLink';

const Main = () => {
    return (
        <main className="container d-flex flex-column">
            <h2>Bem vindo a
                <h1 className="logo col-1">Inova</h1>
            </h2>
            <p className='d-flex justify-content-around'>Comece um novo projeto agora mesmo!</p>
            <div className='d-flex justify-content-center'>
                <ButtonLink />
            </div>

            <div className='d-flex justify-content-around'>
                <img src={Plano} alt="plano" />
            </div>

        </main>
    );
}

export default Main;