import styled from "styled-components";

export const UlHomePageStyled = styled.ul`
  font-family: "Montserrat", sans-serif;

  display: flex;
  overflow-x: auto;

  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  margin: 0 0 0 1rem;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    overflow: none;
    justify-content: center;
  }
`;