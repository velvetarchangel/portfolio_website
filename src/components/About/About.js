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
        <b>BSc | BHSc | MSc | PSM-I | PSFS</b>
        <br></br>
        <br></br> My name is Himika Dastidar, and I hold a degree in Computer
        Science from the University of Calgary. Additionally, I have degrees in
        Biomedical Science and Immunology. During my academic journey, I
        discovered my affinity for coding and began exploring it in my free
        time. Coding became a medium for me to bring ideas to life quickly and
        efficiently. I have developed a strong passion for web development,
        encompassing both front-end and back-end aspects, as well as
        infrastructure. Moreover, I have a keen interest in data science,
        biology, and bioinformatics, and I aspire to merge these domains in my
        professional career. Feel free to explore some of my projects showcased
        below.
      </SectionText>
    </Section>
  );
};

export default About;
