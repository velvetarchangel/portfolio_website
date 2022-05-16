import React from "react";

import { CarouselContainer } from "./AboutStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => {
  return (
    <Section id="about">
      <SectionDivider></SectionDivider>
      <SectionTitle main> About Me</SectionTitle>
      <SectionText>
        My name is Himika Dastidar and I'm a graduate of the University of
        Calgary with a degree in Computer Science. I also have degrees in
        Biomedical Science and Immunology. After finishing these degrees I
        started exploring coding in my free time. Coding allowed me to create
        and prototype things quickly which I loved. I am passionate about all
        things web development (front-end, back-end, and infrastructure), and am
        interested in data science, biology and bioinformatics and would love
        the opportunity to combine both my passions into a career. Please check
        out some of my projects below.
      </SectionText>
    </Section>
  );
};

export default About;
