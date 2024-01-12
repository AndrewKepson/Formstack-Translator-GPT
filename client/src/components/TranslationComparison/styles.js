import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  /* width: 100%; */
  padding-top: 0.5rem;

  & > section {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  margin: 0.75rem 1.5rem;
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

export const FormsComparisonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

export const FormFieldsDisplay = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
`;
