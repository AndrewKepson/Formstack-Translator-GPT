import * as Styled from "./styles";

import { Header, Footer } from "..";

const Layout = ({ children }) => (
  <>
    <Header />
    <Styled.Main>{children}</Styled.Main>
    <Footer />
  </>
);

export default Layout;
