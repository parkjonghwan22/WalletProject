import { Routes, Route } from "react-router-dom";
import { Account, Accountlist, Choice, Main, Clientlist } from "../pages";
import { RouterStyled } from "../pages/Router.Styled";

export const AppRouter = () => {
  return (
    <>
      <RouterStyled>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/aclist" element={<Accountlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/sclist" element={<Clientlist />} />
        </Routes>
      </RouterStyled>
    </>
  );
};
