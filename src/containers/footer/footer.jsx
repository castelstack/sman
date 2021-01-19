import React from "react";
import Logo from "../../images/logo.svg";
import { SmText } from "../../constant/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import Fb from "../../images/fb.svg";
import Twitter from "../../images/twitter.svg";
import Youtube from "../../images/youtube.svg";
import { makeStyles } from "@material-ui/core/styles";

const Container = styled.div`
  background: #0b0d17;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-gap: 20px;
  padding: 54px;
  @media only screen and (max-width: 650px) {
    padding: 54px  20px;
    
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Legal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    
    justify-items: center;
    grid-gap:20px;
  }
`;
const Socials = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 20px;
  align-items: center;
`;
const Routes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 20px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const Links = styled(SmText)`
  color: #fff;
  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;
const LinkTo = styled(Link)`
  color: #fff;
`;
const LogoImg = styled.img`
  height: 25px;
`;
const SocialIcon = styled.img`
  height: 25px;
`;
const SocialLink = styled.a``;

const useStyles = makeStyles((theme) => ({
  divider: {
    color: "white",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Container>
      <Head>
        <LogoImg src={Logo} alt='SMAN logo' />
        <LinkTo to='/nothing'>
          <Links>Stingy Men Association</Links>
        </LinkTo>
      </Head>
      <Routes>
        <LinkTo to='/nothing'>
          <Links>Generate ID</Links>
        </LinkTo>
        <LinkTo>
          <Links>Tell Your Stingy Gist</Links>
        </LinkTo>
        <LinkTo to='/nothing'>
          <Links>Read Stingy Men Gists</Links>
        </LinkTo>
      </Routes>
      <Divider variant='middle' style={classes.divder} />
      <Legal>
        <Links>© 2021 Stingy men association. All rights reserved</Links>
        <Socials>
          <SocialLink>
            <SocialIcon src={Fb} />
          </SocialLink>
          <SocialLink>
            <SocialIcon src={Twitter} />
          </SocialLink>
          <SocialLink>
            <SocialIcon src={Youtube} />
          </SocialLink>
        </Socials>
      </Legal>
    </Container>
  );
};

export default Footer;
