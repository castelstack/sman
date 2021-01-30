import React, { useEffect, useState }  from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
//import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";

import axios from "axios";
import Logo from "../../components/logo/logo";

import { Divider } from "@material-ui/core";
import {Container, Link, active, LogoBox, List, LogOut} from './drawer-style'

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

export default function Drawer(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const [userActive, setUserActive] = useState(false);


  const URL = "https://smanhq.herokuapp.com/";
   // api call with axios in useEffect hook
   useEffect(() => {
    (async () => {
       await  axios
      .get(`${URL}api/v1/users/me`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        res.data.user.active
          ? setUserActive(true)
          : setUserActive(false);
      })
      console.log(userActive)
    })()
  });

  const handleClick = (values) => {
    axios.post(`${URL}api/v1/users/logout`)
    .then((res, req) => {
      console.log(res.data);
      console.log(req)
      
    })
    .catch((err) => {
      // err msg
      alert(err)
      //alert(err.response.data.message);
    });
}
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {
        userActive ? 
        <List>
        <LogoBox to='/'>
          <Logo />
        </LogoBox>
        <Divider light />
        <Link to='/gist' activeStyle={active}>
          Stingy gist
        </Link>
        <Divider />
        <Link to='/create' activeStyle={active}>
          Generate ID
        </Link>
        <Divider />
        <Link to='/rules-and-regulation' activeStyle={active}>
          Stingy rules
        </Link>
        <Divider />
        <Link to='/profile' activeStyle={active}>
          Profile
        </Link>
        
        <LogOut onClick={handleClick}>Log out</LogOut>
        
        
          </List> :
          <List>
          <LogoBox to='/'>
            <Logo />
          </LogoBox>
          <Divider light />
          <Link to='/gist' activeStyle={active}>
            Stingy gist
          </Link>
          <Divider />
          <Link to='/join' activeStyle={active}>
            Generate ID
          </Link>
          <Divider />
          <Link to='/rules-and-regulation' activeStyle={active}>
            Stingy rules
          </Link>
          <Divider />
          <Link to='/join' activeStyle={active}>
            Profile
          </Link>
          <Divider />
          <Link to='/join' activeStyle={active}>
            Login/Signup
          </Link>
        </List>
      }
    </div>
  );

  return (
    <Container>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Container>
  );
}
