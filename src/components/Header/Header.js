import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHome,
  AiTwotoneMail,
} from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center" }}>
          <SocialIcons>
            <AiFillHome size="3rem" color="#0b373d" />
          </SocialIcons>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#accomplishments">
        <NavLink>Accomplishments</NavLink>
      </Link>
      <Link href="#technologies">
        <NavLink>Technologies</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="mailto:h.dastidar@gmail.com">
        <AiTwotoneMail size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/velvetarchangel">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/hdastidar">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
