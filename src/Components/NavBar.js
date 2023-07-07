import logo from "../assets/imagenes/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import products from '../data/products.json';

export default function NavBar() {
  const categories = products.map(prod => prod.category)
  const catNav = new Set(categories)
  const arrayCatNav = [...catNav]

  return (
    <header>
      <nav className="nav__container">
        <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
        {arrayCatNav.map((categ)=>{
          return(
            <ol key={categ} className="nav__container--buttons">
              <li>
                <Link to={`/category/${categ}`}>{categ}</Link>
              </li>
            </ol>
          )
        })}
        <CartWidget/>
      </nav>
    </header>
  );
}
