import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";

const Button = ({ text, href, navigateTo, handler }) => {
  const navigate = useNavigate();

  if (navigateTo)
    return (
      <Styled.Button onClick={() => navigate(navigateTo)}>{text}</Styled.Button>
    );

  if (handler) return <Styled.Button onClick={handler}>{text}</Styled.Button>;

  return <Styled.ButtonAnchor href={href}>{text}</Styled.ButtonAnchor>;
};

export default Button;
