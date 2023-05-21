import { AppRouter } from "./routes/AppRouter";
import { Header } from "./common/header/header";
import { PageStyled } from "./pages/Page.Styled";

const App = () => {
  return (
    <>
      <PageStyled>
        <Header />
        <AppRouter />
      </PageStyled>
    </>
  );
};

export default App;
