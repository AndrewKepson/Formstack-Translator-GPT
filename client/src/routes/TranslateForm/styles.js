import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
`;

export const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
  border: 1px solid var(--formstack-slate-500);
  border-radius: var(--border-radius);
  box-shadow: var(--formstack-shadow);
`;

export const Select = styled.select`
  padding: 0.75rem;
  font-size: 1.4rem;
  text-align: center;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: var(--border-radius);
`;

export const Icon = styled(ArrowDropDownIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const TranslationContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: var(--formstack-slate-100);
  width: 100%;
  padding: 1rem 2rem;

  & > p {
    color: var(--formstack-green);
  }

  & > select {
    width: 80%;
    font-size: 1.2rem;
    padding: 0.5rem;
    align-self: center;
    text-align: center;
  }

  & > span {
    width: 60%;
    align-self: center;
    text-align: center;
  }
`;

export const FormFieldsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0 2rem;
  width: 90%;
  text-align: left;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  /* width: 100%; */
  padding-top: 0.5rem;
`;

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DisplayedField = styled.div`
  & p:first-child {
    font-weight: bold;
  }

  & p:not(:first-child) {
    padding-left: 1rem;
  }
`;
