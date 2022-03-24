//import router
import { Route, Routes } from 'react-router-dom';
//import components
import Main from './pages/Main'
import Company from './pages/Company';
import Contact from './pages/Contact';
import Newproject from './pages/Newproject';

const Menu = () => {
    return (
        <header>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/company' element={<Company />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/newproject' element={<Newproject />} />
          </Routes>
        </header>
    );
}

export default Menu;
