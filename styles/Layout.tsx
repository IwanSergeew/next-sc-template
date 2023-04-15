import styled from "styled-components";
import { viewSizes } from "../components/useViewType";

export const LayoutMain = styled.main``;

export const Footer = styled.footer`
  margin-top: auto;
  background: #1e1e1e;
  display: flex;
  padding: 2em 4em;
  gap: 2em;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: ${viewSizes.normal}px) {
    flex-direction: column;
  } ;
`;
