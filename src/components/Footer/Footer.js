import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialIcons,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:h.dastidar@gmail.com">
            h.dastidar@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>GitHub</LinkTitle>
          <SocialIcons href="https://github.com/velvetarchangel">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>LinkedIn</LinkTitle>
          <SocialIcons href="https://linkedin.com/hdastidar">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
