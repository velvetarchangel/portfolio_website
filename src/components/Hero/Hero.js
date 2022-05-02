import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Talk about yourself!</SectionText>
      <Button>
        <a
          href="Himika_Dastidar_2022_Master_Resume_v2.pdf"
          download
          target="_blank"
        >
          Download Resume
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
