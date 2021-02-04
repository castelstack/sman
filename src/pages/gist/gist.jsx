import React, { useEffect, useState } from "react";
import axios from "axios";
import Gistbox from "../../containers/box/gist-box";
import { NavLink, Route, Link, useRouteMatch } from "react-router-dom";
import Urgent2k from "../../containers/2k/2k";
import MobileTags from "../../components/mobile-tags/mobile-tags";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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
  transition: all;
`;

const Gist = (props) => {
  const { url } = useRouteMatch();

  const [tagState, setTagState] = useState([]);

  const search = useLocation().search;

  const tag = new URLSearchParams(search).get("tag");

  const [tagUrlState, setTagUrl] = useState(tag);

  useEffect(() => {
    const URL = "https://smanhq.herokuapp.com/";
    axios

      .get(`${URL}api/v1/tags/`)

      .then((res, req) => {
        setTagState(res.data.tag);
      })

      .catch((err) => {
        // err msg
        console.log(err);

        alert(err);
      });
  }, []);

  return (
    <Container>
      <Gistbox />
      <Navi>
        <Breadcrumbs aria-label="breadcrumb">
          {tagState.map((tag) => (
            <Link
              to={`${url}?tag=${tag.slug}`}
              activeStyle={active}
              onClick={() => setTagUrl(tag._id)}
            >
              {tag.title}
            </Link>
          ))}
        </Breadcrumbs>
      </Navi>

      <MobileTags />

      <Gists>
        <Route path="/" component={() => <Urgent2k tag={tagUrlState} />} />
      </Gists>
    </Container>
  );
};

export default Gist;
