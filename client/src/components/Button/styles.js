import styled, { css } from "styled-components";

export const Button = styled.span`
  display: inline-block;
  position: relative;
  min-height: 60px;
  margin-right: 40px;
  padding: 18px 26px 18px 29px;
  border-radius: 7px;
  background-color: var(--formstack-black);
  box-shadow: var(--formstack-shadow);
  font-family: sofia-pro, sans-serif;
  color: #fff;
  line-height: 24px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: var(--formstack-hover-shadow);
  }
`;
export const ButtonAnchor = styled.a`
  display: inline-block;
  position: relative;
  min-height: 60px;
  margin-right: 40px;
  padding: 18px 26px 18px 29px;
  border-radius: 7px;
  background-color: var(--formstack-black);
  box-shadow: var(--formstack-shadow);
  font-family: sofia-pro, sans-serif;
  color: #fff;
  line-height: 24px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: var(--formstack-hover-shadow);
  }
`;
