import React, { useState, useEffect, useContext } from "react";
import GistsPost from "../../components/gist-card/gists-post";
import { PostBox } from "../../constant/styles";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import { ActiveContext } from "../../utils/store";
import { useAlert } from "react-alert";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Container = styled.div``;

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

  &[class*="active"]:hover {
    color: blue;
  }
`;

const GistTemplate = ({ tag }) => {
  let user = useContext(ActiveContext);

  // const page = 1;

  const limit = 10;

  const [loading, setLoading] = useState(true);

  const [gists, setGists] = useState([1, 2, 3]);

  const [loggedIn, setLoggedIn] = React.useState(true);

  let [pageState, setPageState] = useState(1);

  let [nextPage, setNextPage] = useState(false);

  const needle = tag !== null ? tag : null;

  const pagify = pageState <= 1 ? null : `page=${pageState}&limit=${limit}`;

  let urlState;

  pagify == null && needle == null
    ? (urlState = `https://smanhq.herokuapp.com/api/v1/gists?&limit=${limit}`)
    : needle
    ? (urlState = `https://smanhq.herokuapp.com/api/v1/gists?${needle}&limit=${limit}`)
    : (urlState = `https://smanhq.herokuapp.com/api/v1/gists?${pagify}`);

  needle !== null && pagify !== null
    ? (urlState = `https://smanhq.herokuapp.com/api/v1/gists?${needle}&${pagify}`)
    : // eslint-disable-next-line no-self-assign
      (urlState = urlState);

  let alert = useAlert();

  useEffect(() => {
    if (user.userInfo === undefined || user.userInfo._id.includes("_id")) {
      setLoggedIn(false);
    }
    setLoading(true);
    axios
      .get(urlState)
      .then((res) => {
        setGists(res.data.gist);

        const currentPage = pageState * limit;

        res.data.gistsCount - currentPage >= 1
          ? setNextPage(true)
          : setNextPage(false);

        setLoading(false);
      })
      .catch((err) => alert.error(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needle, user.userInfo, pageState]);

  return (
    <Container>
      <div>
        <PostBox>
          {gists.map((item, index) => (
            <div key={index}>
              {loading ? (
                <div key={index}>
                  <Skeleton animation="wave" height={20} width="10%" />
                  <Skeleton animation="pulse" width="100%" height={80} />
                  <Skeleton animation="wave" height={10} width="30%" />
                </div>
              ) : (
                <div key={index}>
                  <GistsPost
                    tag={item.title}
                    key={item._id}
                    gistspost={item.description}
                    image={item.image}
                    name={item.createdBy}
                    likes={item.likesCount}
                    liked={item.likes}
                    loggedIn={loggedIn}
                    user={user.userInfo._id}
                    userSman={user.userInfo.smanID}
                    gistCreator={item.createdBy}
                    gistId={item._id}
                    gist={item}
                  />
                </div>
              )}
            </div>
          ))}
        </PostBox>
      </div>
      <div>
        <Pagination>
          {pageState > 1 ? (
            <Button
              className="active"
              onClick={() => setPageState(() => (pageState -= 1))}
            >
              <ChevronLeftIcon />
              <div>Prev {pageState - 1}</div>
            </Button>
          ) : (
            <Button disabled={true}>
              <ChevronLeftIcon />
              Prev
            </Button>
          )}
          {nextPage ? (
            <Button
              className="active"
              onClick={() => setPageState(() => (pageState += 1))}
            >
              Next <ChevronRightIcon />
            </Button>
          ) : (
            <Button disabled={true}>
              Next <ChevronRightIcon />
            </Button>
          )}
        </Pagination>
      </div>
    </Container>
  );
};

export default GistTemplate;
