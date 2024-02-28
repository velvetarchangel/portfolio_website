import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { ImageContainer, Img } from "../Technologies/TechnologiesStyles";
import { frontendTechnologies, backendTechnologies, miscTechnologies } from "../../constants/constants";

import { List, ListItem, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <SectionTitle main> Frontend Technologies</SectionTitle>
    <List>
      {frontendTechnologies.map(({ name, source }) => (
        <ListItem key={name}>
          <ImageContainer>
            <Img src={source} />
            <ListTitle>{name}</ListTitle>
          </ImageContainer>
        </ListItem>
      ))}
    </List>

    <SectionTitle main> Backend Technologies</SectionTitle>
    <List>
      {backendTechnologies.map(({ name, source }) => (
        <ListItem key={name}>
          <ImageContainer>
            <Img src={source} />
            <ListTitle>{name}</ListTitle>
          </ImageContainer>
        </ListItem>
      ))}
    </List>

    <SectionTitle main> Miscellaneous Technologies</SectionTitle>
    <List>
      {miscTechnologies.map(({ name, source }) => (
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
