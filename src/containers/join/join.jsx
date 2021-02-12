import React from "react";
import Image from "../../images/join.png";

import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Login from "./login";
import SignupForm from "./reg";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Container, Content, BeStingy, Img } from "./join.style";
import styled from "styled-components";

const Navi = styled.div`
  margin: 10px 20px;
`;

const NavLinks = styled(NavLink)`
  font-size: 16px;
  line-height: 20px;
  color: #843035;
  padding: 5px 7px;
  text-decoration: none;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadNav = styled.div`
  background: #fafafa;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

const active = {
  color: "#843035",
  borderBottom: "solid 1px #843035",
};
const Join = () => {
  const { url, path } = useRouteMatch();
  return (
    <Container>
      <Content>
        <Img src={Image} alt="join us" />
        <div>
          <HeadNav>
            <BeStingy>Be stingy!!!</BeStingy>

            <Navi>
              <Breadcrumbs aria-label="breadcrumb">
                <NavLinks to={`${url}/login`} activeStyle={active}>
                  Login
                </NavLinks>
                <NavLinks to={`${url}/register`} activeStyle={active}>
                  Register
                </NavLinks>
              </Breadcrumbs>
            </Navi>
          </HeadNav>

          <div>
            <Switch>
              <Route path={`${path}/register`} component={SignupForm} />
              <Route path={`${path}/login`} component={Login} />
              <Route path={path} component={SignupForm} />
            </Switch>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Join;
