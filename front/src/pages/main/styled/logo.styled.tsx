import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Logolayout = styled.div`
  & > .logo {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    margin-bottom: 50px;
  }
`;

export const MainLogo = () => {
  return (
    <Logolayout>
      <Icon icon="logos:bitcoin" className="logo" />
    </Logolayout>
  );
};
