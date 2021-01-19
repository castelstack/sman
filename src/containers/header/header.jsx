import React from "react";
import Logo from "../../components/logo/logo";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Drawer from "../../components/drawer/drawer";

const Container = styled.div`
`;

const active = {
  borderBottom: "2px solid #843035",
};

const HeaderLogo = styled(Logo)`
  margin-right: auto;

`;

const HeaderLink = styled(NavLink)`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-decoration: none;
  color: #4d4b4b;
  transition: all 0.5s ease-out;

  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;

const HeaderLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 138px;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 620px) {
    grid-template-columns: 1fr;
    justify-items: flex-end;
    display: none;
  }

  @media only screen and (max-width: 400px) {
    grid-gap: 60px;
    display: none;
  }
`;

const Appbarr = styled.div`
  padding: 0 99px;

  @media only screen and (max-width: 800px) {
    padding: 0 60px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 40px;
  }

  @media only screen and (max-width: 400px) {
    padding: 0 20px;
  }
`;

const Toolbarr = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);

  justify-content: space-between;

  @media only screen and (max-width: 800px) {
  }
  @media only screen and (max-width: 600px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    align-items: center;
  }
`;

export default function ButtonAppBar() {
  return (
    <Container>
      <Appbarr>
        <Toolbarr>
          <Link to='/'>
            <HeaderLogo />
          </Link>
          <HeaderLinks>
            <HeaderLink to='/rules-and-regulation' activeStyle={active}>
              Rules & Regulation
            </HeaderLink>
            <HeaderLink to='/gist' activeStyle={active}>
              Stingy gists
            </HeaderLink>
            <HeaderLink to='/create'>
            <Button to='/rules-and-regulation' value='Generate Card' />
            </HeaderLink>
          </HeaderLinks>
          <Drawer />
        </Toolbarr>
      </Appbarr>
    </Container>
  );
}
