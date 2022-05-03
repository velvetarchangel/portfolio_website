import React, { useState, useRef, useEffect } from "react";

import { CarouselContainer } from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();
  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider></SectionDivider>
      <SectionTitle main> About Me</SectionTitle>
      <SectionText>
        My name is Himika Dastidar and I'm a graduate from the University of
        Calgary with a degree in Computer Science. I also have degrees in
        Biomedical Science and Immunology. After finishing my Biology Degrees I
        started exploring coding in my free time. Coding allowed me to create
        and prototype things quickly which I loved. I am passionate about all
        things web development (front-end, back-end and infrastructure), and am
        interested in data-science and bioinformatics and biology and would love
        the opportunity to combine both my passions into a career. Please check
        out some of my projects below.
      </SectionText>
      <CarouselContainer
        ref={carouselRef}
        onScroll={handleScroll}
      ></CarouselContainer>
    </Section>
  );
};

export default Timeline;
