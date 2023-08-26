import "./style.css";
import home from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="content-container">
          <nav className="navbar">
            <div className="menu-item">Início</div>
            <div className="menu-item">Produtos</div>
            <div className="menu-item">Sobre nós</div>
          </nav>
          <img src={home} alt="Início" />
        </div>
      </div>
    </header>
  );
}
