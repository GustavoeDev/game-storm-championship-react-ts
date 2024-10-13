import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 90rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.563rem 3rem;
  position: relative;
`;

export const NavIcon = styled.div`
  cursor: pointer;
  z-index: 10000;
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;

  svg {
    color: ${(props) => props.theme["white"]};
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme["black"]};
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(100px at 100% -25%);
  transition: clip-path 1s ease-out;
  pointer-events: none;

  &.active {
    clip-path: circle(1500px at 100% -25%);
    pointer-events: all;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  opacity: 0;
  transition: opacity 0.5s ease;

  li {
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme["white"]};
    text-decoration: none;
    font-size: 1.25rem;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &.active {
    opacity: 1;
  }

  &.active a {
    opacity: 1;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 900px) {
    display: none;
  }

  a {
    color: ${(props) => props.theme["white"]};
    text-decoration: none;
    position: relative;
    padding: 0.313rem 0.5rem;

    &::after {
      content: " ";
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme["purple-100"]};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
