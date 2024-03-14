import React from "react";

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
        <b>BSc in Computer Science | PSM-I | PSFS | PSPO-I | BHSc Hons. | MSc.</b>
        <br></br>
        <br></br> My name is Himika Dastidar, I'm a dynamic and skilled software engineer with a knack for full-stack development. 
        I've honed my craft using technologies like Java Spring Boot, React, Vue.js, AWS, and Terraform to create robust solutions that exceed client expectations.
        With a passion for innovation and an eye for detail, I thrive in fast-paced environments where I can push boundaries and learn new things. 
        My collaborative nature and strong communication skills make me a valuable team player, ensuring smooth integration and successful project outcomes.
        I'm excited to take on new challenges, learn new technologies and continue delivering top-notch quality user-focused software.
      </SectionText>
    </Section>
  );
};

export default About;
