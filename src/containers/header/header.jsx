import React, {  useContext } from "react";

import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Drawer from "../../components/drawer/drawer";
import { Avatar } from "@material-ui/core";
import join from "../../images/join.png";
import { ActiveContext } from '../../utils/store';
import {
  Container,
  active,
  HeaderLogo,
  HeaderLink,
  ButtonLink,
  HeaderLinks,
  Appbarr,
  Toolbarr,
} from "./header-style";

export default function ButtonAppBar() {
  const isActive = useContext(ActiveContext);


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
            <ButtonLink to='/create'>
              <Button value='Generate Card' />
            </ButtonLink>
            {
              isActive ? 
            <HeaderLink to='/profile'>
              <Avatar alt='profile pic' src={join} />
            </HeaderLink> :
            <HeaderLink to='/join' activeStyle={active}>
              Login/SignUp
            </HeaderLink>
    }
          </HeaderLinks>
          <Drawer />
        </Toolbarr>
      </Appbarr>
    </Container>
  );
}
