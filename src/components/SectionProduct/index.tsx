import { NavLink } from "react-router-dom";
import "./style.css";

export default function SectionProduct() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="card">
            <nav className="nav-product">
              <NavLink
                to="/product/computers"
                className={({ isActive }) =>
                  isActive
                    ? "menu-item-product menu-active-product"
                    : "menu-item-product"
                }
              >
                Computadores
              </NavLink>
              <NavLink
                to="/product/eletronics"
                className={({ isActive }) =>
                  isActive
                    ? "menu-item-product menu-active-product"
                    : "menu-item-product"
                }
              >
                Eletrônicos
              </NavLink>
              <NavLink
                to="/product/books"
                className={({ isActive }) =>
                  isActive
                    ? "menu-item-product menu-active-product"
                    : "menu-item-product"
                }
              >
                Livros
              </NavLink>
            </nav>  
          </div>
        </div>
      </section>
    </main>
  );
}
