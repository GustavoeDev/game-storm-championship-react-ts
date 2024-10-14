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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setIsMenuOpen(false);
    }
  };

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
        <a href="#">Sobre</a>
        <a href="#">Detalhes</a>
        <a href="#">O que oferecemos?</a>
        <a href="#">Inscrição</a>
      </Navigation>

      <NavIcon onClick={toggleMenu}>
        {isMenuOpen ? <X size={36} className="position" /> : <List size={36} />}
      </NavIcon>

      <NavMenu className={isMenuOpen ? "active" : ""}>
        <NavList className={isMenuOpen ? "active" : ""}>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#container-about-event">Sobre</a>
          </li>
          <li>
            <a href="#container-details">Detalhes</a>
          </li>
          <li>
            <a href="#container-offers">O que oferecemos?</a>
          </li>
          <li>
            <a href="#container-form">Inscrição</a>
          </li>
        </NavList>
      </NavMenu>
    </HeaderContainer>
  );
}
