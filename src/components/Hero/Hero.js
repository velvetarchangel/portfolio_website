import React from "react";

import styled from "styled-components";
import { Section } from "../../styles/GlobalComponents";
import { LeftSection, SectionTitle } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Himika Dastidar's Portfolio Page
      </SectionTitle>
      <Button>
        <ButtonText
          href="Himika_Dastidar_2024_resume.pdf"
          download
          target="_blank"
        >
          Download Resume
        </ButtonText>
      </Button>
    </LeftSection>
  </Section>
);

const Button = styled.button`
  border-radius: 50px;
  background: #13adc7;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  top: 0;
  left: 0;
  border: none;
  color: #ffffff;
  border-radius: 50px;
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 20px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    top: 0;
    left: 0;
  }
`;

const ButtonText = styled.a`
  color: #ffffff;
`;
export default Hero;
