import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
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
