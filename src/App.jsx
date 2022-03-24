//import css plus bootstrap
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/navbar.css'
//import components
import Menu from './components/Menu'
import { BrowserRouter, Link } from 'react-router-dom'
//import logo
import Projeto from './img/projeto.png'
//import icon navbar
import Home from './img/home.png'
import Company from './img/compani.png'
import Contact from './img/contact.png'
import Management from './img/management.png'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
        <BrowserRouter >
          <div className='navbar d-flex justify-content-around'>
            <div>
              <Link to='/'><h1 className='logo'>Inova</h1></Link>
            </div>
            <div className='col-lg-3'></div>
            <nav className='d-flex col-6 justify-content-around'>
                <Link className='link d-flex justify-content-center' title='Home' to='/'>
                  <img src={Home} className='img'/>
                </Link>
                <Link className='link d-flex justify-content-center' title='Companhia' to='/company'>
                  <img src={Company} className='img'/>
                </Link>
                <Link className='link d-flex justify-content-center' title='Novo Projeto' to='/newproject'>
                  <img src={Management} className='img' />
                </Link>
                <Link className='link d-flex justify-content-center' title='Contatos' to='/contact'>
                  <img src={Contact} className='img' />
                </Link>
            </nav>
          </div>
          <Menu />
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App

