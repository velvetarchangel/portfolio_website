import React from "react";
import { FooterWrapper, LinkColumn, LinkList, LinkTitle } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Copyright: Himika Dastidar 2022</LinkTitle>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
