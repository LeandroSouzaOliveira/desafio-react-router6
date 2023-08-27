import "./style.css";
import home from "../../assets/home.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="content-container">
          <nav className="navbar">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "menu-item-header menu-active-product"
                  : "menu-item-header"
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "menu-item-header menu-active-product"
                  : "menu-item-header"
              }
            >
              Produtos
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "menu-item-header menu-active-product"
                  : "menu-item-header"
              }
            >
              Sobre nós
            </NavLink>
          </nav>
          <Link to="/">
            <img src={home} alt="Início" />
          </Link>
        </div>
      </div>
    </header>
  );
}
