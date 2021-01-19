import React from "react";
import Gistbox from "../../containers/box/gist-box";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { SmText } from "../../constant/styles";
import Urgent2k from "../../containers/2k/2k";
import Transport from "../../containers/transport/transport";
import MobileTags from "../../components/mobile-tags/mobile-tags";
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

  @media only screen and (max-width: 500px) {
    display: none;
  }
  
`;

const Nav = styled(SmText)`
  font-size: 13px;
  line-height: 20px;
  color: #843035;
  padding: 5px 7px;

`;
const active = {
 
  boxShadow: 'rgba(50, 50, 93, 0.2) 0px 10px 60px -12px inset, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset',
 };
const Gists = styled.div``;
const NavLinks = styled(NavLink)`
  
  text-decoration: none;

  border: 1px solid #843035;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;


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
      <MobileTags />
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
