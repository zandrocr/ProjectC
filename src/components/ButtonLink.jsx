import { Link, Route, Routes } from 'react-router-dom';
import '../css/button-link.css'
import Newproject from './pages/Newproject';

const ButtonLink = () => {
    return (
        <>
            <nav className=' d-flex justify-content-center'>
                <Link to='/newproject' className='bt capBt d-flex justify-content-center'>Novo projeto</Link>
            </nav>
            <Routes>
                <Route path='/newproject' element={<Newproject />} />
            </Routes>
        </>
     );
}

export default ButtonLink;

{/*
<Link className='capBt d-flex justify-content-center' to={to}>
                <a className='bt d-flex justify-content-center' href="#">{text}</a>
            </Link>
*/}