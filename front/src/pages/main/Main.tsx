import { NavLink } from "react-router-dom";
import { Mainlayout } from "./styled/Mainlayout.styled";
import { MainLogo } from "./styled/logo.styled";

export const Main = () => {
  return (
    <Mainlayout>
      <MainLogo />
      <NavLink to="choice">Start</NavLink>
    </Mainlayout>
  );
};
