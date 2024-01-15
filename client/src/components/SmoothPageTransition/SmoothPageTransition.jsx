import { useState, useEffect } from "react";

import * as Styled from "./styles";

const SmoothPageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Styled.TransitionWrapper isVisible={isVisible}>
      {children}
    </Styled.TransitionWrapper>
  );
};

export default SmoothPageTransition;
