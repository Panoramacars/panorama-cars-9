import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";
import { Caption, H3 } from "../../theme";
import { AnimatedLink } from "../Links";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <H3>Panorama Rent A Cars</H3>
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        <Caption>
          <AnimatedLink to="https://www.panoramacars.ae">
            Panorama Cars 
          </AnimatedLink>
        </Caption>
        <Caption>© 2023 Panorama Rent A Cars, UAE</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
