import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Gistbox from "../../containers/box/gist-box";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { useAlert } from "react-alert";
import GistTemplate from "../../containers/templates/gist";
import { ActiveContext } from "../../utils/store";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Container = styled.div``;

const Navi = styled.div`
  margin: 0 99px;
  width: 90%;
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
  text-transfrom: capitalize;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all;
`;
const Pagination = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  justify-content: center;
  grid-gap: 15rem;
  width: 100%;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  border: none;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 0.4rem;
  align-items: center;

  &:hover {
    color: blue;
  }
`;
const Gist = (props) => {
  const { url } = useRouteMatch();

  const alert = useAlert();

  const [tagState, setTagState] = useState([]);

  let [pageState, setPageState] = useState(1);

  const search = useLocation().search;

  const tag = new URLSearchParams(search).get("tag");

  const currentUser = useContext(ActiveContext);

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

        alert.error(err.message);
      });
  }, [alert]);

  return (
    <Container>
      <Gistbox />
      <Navi>
        <Breadcrumbs aria-label="breadcrumb">
          {currentUser.userActive ? (
            <NavLinks
              to={`${url}/me`}
              key={1}
              onClick={() =>
                setTagUrl(`createdBy=${currentUser.userInfo.smanID}`)
              }
              activeStyle={active}
            >
              My Gists
            </NavLinks>
          ) : (
            ""
          )}

          <NavLinks
            to={`${url}/`}
            key={1}
            onClick={() => {
              setTagUrl(`valid=${true}`);
              setPageState(1);
            }}
            activeStyle={active}
          >
            All Gists
          </NavLinks>

          {tagState.map((tag) => (
            <NavLinks
              to={`${url}?tag=${tag.slug}`}
              key={tag._id}
              onClick={() => {
                setTagUrl(`tag=${tag._id}`);
                setPageState(1);
              }}
              activeStyle={active}
            >
              {tag.title}
            </NavLinks>
          ))}
        </Breadcrumbs>
      </Navi>

      <Gists>
        <Route
          path="/"
          component={() => <GistTemplate tag={tagUrlState} page={pageState} />}
        />
      </Gists>
      <Pagination>
        {pageState > 1 ? (
          <Button onClick={() => setPageState(() => (pageState -= 1))}>
            <ChevronLeftIcon />
            Prev
          </Button>
        ) : (
          <Button disabled={true}>
            <ChevronLeftIcon />
            Prev
          </Button>
        )}

        <Button onClick={() => setPageState(() => (pageState += 1))}>
          Next <ChevronRightIcon />
        </Button>
      </Pagination>
    </Container>
  );
};

export default Gist;
