import React, {  useContext } from "react";

import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Drawer from "../../components/drawer/drawer";
import { Avatar } from "@material-ui/core";
import AvatarP from "../../images/avatar.svg";
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
            {
              isActive.userActive ? 
                <>
            <ButtonLink to='/create'>
              <Button value='Generate Card' />
            </ButtonLink>
            <HeaderLink to='/profile' >
              <Avatar alt='profile pic' src={AvatarP} />
            </HeaderLink> 
                </> :
                <>
                 <ButtonLink to='/join'>
                 <Button value='Generate Card' />
               </ButtonLink>
            <HeaderLink to='/join' activeStyle={active}>
              Login/SignUp
            </HeaderLink>
            </>
    }
          </HeaderLinks>
          <Drawer />
        </Toolbarr>
      </Appbarr>
    </Container>
  );
}
