import styled from "styled-components";

export const HeaderThree = styled.h3`
  font-weight: 600;
  font-family: Source Sans Pro, sans-serif;
  color: #ffffff;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const AccomplishmentInfo = styled.h3`
  width: 100%;
  color: #e4e6e7;
  line-height: 25px;
  font-family: Merriweather, sans-serif;
  text-align: left;
  font-weight: 350;
  font-size: 1.75rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;
