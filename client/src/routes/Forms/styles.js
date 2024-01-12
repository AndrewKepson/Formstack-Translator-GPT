import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 1rem;
`;

export const Forms = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 1.25rem;
  margin-top: 2rem;
  max-width: 800px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const FormLink = styled.a`
  text-decoration: none;
  color: var(--formstack-green);
`;

export const TranslateButton = styled.a`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  background-color: var(--formstack-plumb);
  color: var(--formstack-slate-100);
  margin-left: 1rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--formstack-plumb);
  border-radius: var(--border-radius);
  box-shadow: var(--formstack-shadow);
  font-size: 1.1rem;
  cursor: pointer;

  &hover: {
    box-shadow: var(--formstack-hover-shadow);
  }
`;
