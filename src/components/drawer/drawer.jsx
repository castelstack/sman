import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
//import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

import Logo from "../../components/logo/logo";
import styled from "styled-components";
import { Divider } from "@material-ui/core";

const Container = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const Link = styled(NavLink)`
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 42px;
  color: #18191f;
  text-align: center;
  text-decoration: none;
  border-bottom: solid 2px grey;
  &:Hover{
    color:  activeStyle={active}#843035;
  }
`;

const active = {
    color: "#843035",
    
  };

const LogoBox = styled(NavLink)`
  margin: 30px;
  text-align: center;
  `
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

export default function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

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
      <List>
        <LogoBox to='/'>
          <Logo />
        </LogoBox>
        <Divider light />
        <Link to='/gist' activeStyle={active}>Stingy gist</Link>
        <Divider />
        <Link to='/create' activeStyle={active}>Generate ID</Link>
        <Divider />
        <Link to='/rules-and-regulation' activeStyle={active}>Stingy rules</Link>
        <Divider />
        <Link to='/profile' activeStyle={active}>Profile</Link>
      </List>
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
