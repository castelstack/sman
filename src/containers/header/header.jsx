import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import axios from "axios";
import Drawer from "../../components/drawer/drawer";
import { Avatar } from "@material-ui/core";
import join from "../../images/join.png";
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
  
  const [userActive, setUserActive] = useState(false);


  const URL = "https://smanhq.herokuapp.com/";
   // api call with axios in useEffect hook
   useEffect(() => {
    (async () => {
       await  axios
      .get(`${URL}api/v1/users/me`)
      .then((res) => {
        console.log(res.data);
        res.data.active === "true"
          ? setUserActive(true)
          : setUserActive(false);
      })
      
    })()

    
    axios
        .get(`${URL}api/v1/users/me`)
        .then((res) => {
          console.log(res.data);
          res.data.active === "true"
            ? setUserActive(true)
            : setUserActive(false);
        })
        console.log(userActive)
  });

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
              userActive ?
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
