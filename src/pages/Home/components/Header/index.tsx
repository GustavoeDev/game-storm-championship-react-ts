import { useState, useEffect } from "react";
import {
  HeaderContainer,
  NavMenu,
  NavIcon,
  NavList,
  Navigation,
} from "./styles";
import { List, X } from "phosphor-react";
import logo from "./assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleResize() {
    if (window.innerWidth > 900) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />

      <Navigation>
        <a href="#">Início</a>
        <a href="#about">Sobre</a>
        <a href="#details">Detalhes</a>
        <a href="#offers">O que oferecemos?</a>
        <a href="#registration">Inscrição</a>
      </Navigation>

      <NavIcon onClick={toggleMenu}>
        {isMenuOpen ? <X size={36} className="position" /> : <List size={36} />}
      </NavIcon>

      <NavMenu className={isMenuOpen ? "active" : ""}>
        <NavList className={isMenuOpen ? "active" : ""}>
          <li>
            <a href="#" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#details" onClick={closeMenu}>
              Detalhes
            </a>
          </li>
          <li>
            <a href="#offers" onClick={closeMenu}>
              O que oferecemos?
            </a>
          </li>
          <li>
            <a href="#registration" onClick={closeMenu}>
              Inscrição
            </a>
          </li>
        </NavList>
      </NavMenu>
    </HeaderContainer>
  );
}
