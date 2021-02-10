import React, { useContext } from "react";
import Logo from "../../images/logo.svg";
import {
  Container,
  Head,
  LogoImg,
  LinkTo,
  Socials,
  Legal,
  Links,
  Routes,
  SocialIcon,
  SocialLink,
} from "./footer-style";
import { Divider } from "@material-ui/core";
import Fb from "../../images/fb.svg";
import Twitter from "../../images/twitter.svg";
import Youtube from "../../images/youtube.svg";
import { makeStyles } from "@material-ui/core/styles";

import { ActiveContext } from "../../utils/store";

const useStyles = makeStyles((theme) => ({
  divider: {
    color: "white",
  },
}));
const Footer = () => {
  const isActive = useContext(ActiveContext);

  const classes = useStyles();
  return (
    <Container>
      <Head>
        <LogoImg src={Logo} alt="SMAN logo" />
        <LinkTo to="/">
          <Links>Stingy Men Association</Links>
        </LinkTo>
      </Head>
      <button>
        <a href="https://flutterwave.com/pay/sman-donation">Donate</a>
      </button>
      {isActive.userActive ? (
        <Routes>
          <LinkTo to="/create">
            <Links>Generate ID</Links>
          </LinkTo>
          <LinkTo to="write-gist">
            <Links>Tell Your Stingy Gist</Links>
          </LinkTo>
          <LinkTo to="/gist">
            <Links>Read Stingy Men Gists</Links>
          </LinkTo>
          <LinkTo to="/suggest">
            <Links>Suggestion</Links>
          </LinkTo>
        </Routes>
      ) : (
        <Routes>
          <LinkTo to="/join">
            <Links>Generate ID</Links>
          </LinkTo>
          <LinkTo to="/join">
            <Links>Tell Your Stingy Gist</Links>
          </LinkTo>
          <LinkTo to="/gist">
            <Links>Read Stingy Men Gists</Links>
          </LinkTo>
        </Routes>
      )}

      <Divider variant="middle" style={classes.divder} />
      <Legal>
        <Links>
          © {new Date().getFullYear()} Stingy men association. All rights
          reserved
        </Links>

        <Socials>
          <SocialLink>
            <SocialIcon herf="" src={Fb} />
          </SocialLink>
          <SocialLink>
            <SocialIcon herf="" src={Twitter} />
          </SocialLink>
          <SocialLink>
            <SocialIcon herf="" src={Youtube} />
          </SocialLink>
        </Socials>
      </Legal>
    </Container>
  );
};

export default Footer;
