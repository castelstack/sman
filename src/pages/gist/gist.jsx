import React from "react";
import Gistbox from "../../containers/box/gist-box";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Urgent2k from "../../containers/2k/2k";
import Transport from "../../containers/transport/transport";
import MobileTags from "../../components/mobile-tags/mobile-tags";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import styled from "styled-components";

const Container = styled.div``;

const Navi = styled.div`
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

const active = {
  color: "#843035",
};
const Gists = styled.div``;
const NavLinks = styled(NavLink)`
  font-size: 16px;
  line-height: 20px;
  color: #18191f;
  padding: 5px 7px;
  text-decoration: none;

  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:  all
`;

const Gist = (props) => {
  const { url, path } = useRouteMatch();
  console.log(props);
  return (
    <Container>
      <Gistbox />
      <Navi>
        <Breadcrumbs aria-label='breadcrumb'>
          <NavLinks to={`${url}/urgent2k`} activeStyle={active}>
            Urgent 2k
          </NavLinks>
          <NavLinks to={`${url}/transport`} activeStyle={active}>
            Transport
          </NavLinks>
          <NavLinks to='2k'>Urgent 2k</NavLinks>
          <NavLinks to='2k'>Urgent 2k</NavLinks>
          <NavLinks to='2k'>Urgent 2k</NavLinks>
          <NavLinks to='2k'>Urgent 2k</NavLinks>
        </Breadcrumbs>
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
