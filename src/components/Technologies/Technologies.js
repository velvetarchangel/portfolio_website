import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { ImageContainer, Img } from "../Technologies/TechnologiesStyles";
import { techonologiesData } from "../../constants/constants";

import { List, ListItem, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <SectionTitle main> Technologies</SectionTitle>
    <List>
      {techonologiesData.map(({ name, source }) => (
        <ListItem key={name}>
          <ImageContainer>
            <Img src={source} />
            <ListTitle>{name}</ListTitle>
          </ImageContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
