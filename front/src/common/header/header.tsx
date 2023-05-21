import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./styled/Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/choice">Choice</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/aclist">MyAc</NavLink>
        <NavLink to="/sclist">Clients</NavLink>
      </HeaderStyled>
    </>
  );
};
