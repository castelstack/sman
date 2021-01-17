import React from "react";
import Gistbox from "../../containers/box/gist-box";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { SmText } from "../../constant/styles";
import Urgent2k from "../../containers/2k/2k";
import Transport from "../../containers/transport/transport";
import styled from "styled-components";

const Container = styled.div``;

const Navi = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 99px;


  @media only screen and (max-width: 900px) {
    margin: 0 60px;
  }

  @media only screen and (max-width: 800px) {
    margin: 0 40px;
  }
  @media only screen and (max-width: 620px) {
    margin: 0 20px;
  }

  @media only screen and (max-width: 400px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  
`;

const Nav = styled(SmText)`
  font-size: 16px;
  color: #843035;

  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const active = {
  color: "white",
  background: "#843035",
};
const Gists = styled.div``;
const NavLinks = styled(NavLink)`
  width: 130px;
  height: 43px;
  text-decoration: none;

  border: 1px solid #843035;
  box-sizing: border-box;
  border-radius: 65px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    width: 120px;
    height: 40px;
  }

  @media only screen and (max-width: 800px) {
    width: 110px;
    height: 38px;
  }
  @media only screen and (max-width: 620px) {
    width: 90px;
    height: 38px;
  }
`;

const Gist = (props) => {
  const { url, path } = useRouteMatch();
  console.log(props);
  return (
    <Container>
      <Gistbox />
      <Navi>
        <NavLinks to={`${url}/urgent2k`} activeStyle={active}>
          <Nav>Urgent 2k</Nav>
        </NavLinks>
        <NavLinks to={`${url}/transport`} activeStyle={active}>
          <Nav>Transport</Nav>
        </NavLinks>
        <NavLinks to='2k'>
          <Nav>Urgent 2k</Nav>
        </NavLinks>
        <NavLinks to='2k'>
          <Nav>Urgent 2k</Nav>
        </NavLinks>
        <NavLinks to='2k'>
          <Nav>Urgent 2k</Nav>
        </NavLinks>
        <NavLinks to='2k'>
          <Nav>Urgent 2k</Nav>
        </NavLinks>
      </Navi>
      <Gists>
        <Switch>
          <Route path={`${path}/urgent2k`} component={Urgent2k} />
          <Route path={`${path}/transport`} component={Transport} />
          <Route path={path} component={Urgent2k} />
        </Switch>
      </Gists>
    </Container>
  );
};

export default Gist;
