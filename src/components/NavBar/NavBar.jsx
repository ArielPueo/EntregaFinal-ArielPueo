import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const logoBrand = './narutoicon.png';
  return (
    <header>
        <Link to={"/"}>
          <img className="logoBrand" src={logoBrand} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink className="button" activeClassName="active" to={"/categoria/2"}> Ropa </NavLink>
                </li>

                <li>
                  <NavLink className="button" activeClassName="active" to={"/categoria/3"}> Otros </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar