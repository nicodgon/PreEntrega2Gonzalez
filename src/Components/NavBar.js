import logo from '../assets/imagenes/logo.png'
import CartWidget from './CartWidget'

export default function NavBar (){
    return (
        <header>
            <nav className='nav__container'>
                <img src={logo} alt="logo" className='logo'/>
                <ol className='nav__container--buttons'>
                    <li><a href="#">Componentes</a></li>
                    <li><a href="#">Periféricos</a></li>
                    <li><a href="#">Monitores</a></li>
                    <li><a href="#">Sillas Gamer</a></li>
                </ol>
                <CartWidget/>
            </nav>
        </header>
    )
}