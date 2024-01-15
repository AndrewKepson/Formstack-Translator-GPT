import styled from "styled-components";

export const Footer = styled.footer`
  height: 24rem;
  width: 100%;
  background-color: var(--formstack-slate-500);
`;

export const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  padding: 2rem;
`;

export const PrimaryLogoWrapper = styled.div`
  grid-column: 1 / 4;
`;

export const ProductLogosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  img {
    width: 3rem;
  }
`;
