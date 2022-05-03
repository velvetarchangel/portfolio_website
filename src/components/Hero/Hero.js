import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my personal portfolio page
      </SectionTitle>
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
