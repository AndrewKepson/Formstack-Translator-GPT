import * as Styled from "./styles";

import FormstackLogo from "../../assets/Formstack Logo.svg";
import FormsLogo from "../../assets/Formstack_Forms_Product_Icon.svg";
import DocsLogo from "../../assets/Formstack_Documents_Product_Icon.svg";
import SignLogo from "../../assets/Formstack_Sign_Product_Icon.svg";

const Footer = () => (
  <Styled.Footer>
    <Styled.LogosContainer>
      <Styled.PrimaryLogoWrapper>
        <img src={FormstackLogo} alt="Formstack Logo" width="320" />
      </Styled.PrimaryLogoWrapper>
      <Styled.ProductLogosWrapper>
        <img src={FormsLogo} alt="Formstack Forms Logo" />
        <img src={DocsLogo} alt="Formstack Documents Logo" />
        <img src={SignLogo} alt="Formstack Sign Logo" />
      </Styled.ProductLogosWrapper>
    </Styled.LogosContainer>
  </Styled.Footer>
);

export default Footer;
