import * as Styled from "./styles";

import Header from "../Header/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <Styled.Main>{children}</Styled.Main>
  </>
);

export default Layout;
