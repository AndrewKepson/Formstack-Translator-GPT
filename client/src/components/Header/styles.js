import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: var(--formstack-slate-100);
`;

export const Logo = styled.img`
  width: auto;
  height: 85px;
  object-fit: contain;
  padding: 1.5rem 0;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const NavLogo = styled.li`
  grid-column: span 12 / span 12;

  @media (min-width: 1024px) {
    grid-column: span 2 / span 2;
  }
`;

export const FlyOutMenu = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0 30px 30px -10px rgb(0 0 0 / 20%);
  top: 105px;
  padding-top: 40px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
`;

export const NavGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
  margin: 0;
  width: 100%;
  list-style: none;

  li ${FlyOutMenu} {
    display: none;
  }

  li &:hover ${FlyOutMenu} {
    display: absolute;
  }
`;

export const NavMenuItem = styled.li`
  grid-column: span 4 / span 4;

  @media (min-width: 720px) {
    grid-column: span 2 / span 2;
  }

  @media (min-width: 1024px) {
    grid-column: span 2 / span 2;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  margin: 0;
  padding: 10px;
  font-family: sofia-pro, sans-serif;
  color: var(--formstack-black);
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  text-decoration: none;
`;

export const NavButton = styled.li`
  grid-column: span 6 / span 6;

  @media (min-width: 720px) {
    grid-column: span 2 / span 2;
  }
`;
