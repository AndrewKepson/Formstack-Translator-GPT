import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* width: 100%; */
  padding-top: 0.5rem;
`;

export const Wrapper = styled.div`
  margin: 2rem 1.5rem;
  padding: 1rem 2rem;
  border: 1px solid var(--formstack-slate-500);
  border-radius: var(--border-radius);
  box-shadow: var(--formstack-shadow);
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FormFieldsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 90%;
  text-align: left;
`;

export const TranslationContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  max-width: 60%;
`;
