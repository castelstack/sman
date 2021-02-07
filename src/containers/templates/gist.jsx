import React, { useState, useEffect, useContext } from "react";
import GistsPost from "../../components/gist-card/gists-post";
import { PostBox } from "../../constant/styles";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import { ActiveContext } from "../../utils/store";
import { useAlert } from "react-alert";

const GistTemplate = ({ tag }) => {
  let user = useContext(ActiveContext);

  const [loading, setLoading] = useState(true);

  const [gists, setGists] = useState([1, 2, 3]);

  const [loggedIn, setLoggedIn] = React.useState(true);

  const needle = tag !== null ? tag : "";

  let alert = useAlert();

  useEffect(() => {
    if (!user.userInfo._id) {
      setLoggedIn(false);
    }
    setLoading(true);
    axios
      .get(`https://smanhq.herokuapp.com/api/v1/gists?${needle}`)
      .then((res) => {
        setGists(res.data.gist);

        setLoading(false);
      })
      .catch((err) => alert.error(err.message));
  }, [needle]);

  return (
    <div>
      <PostBox>
        {gists.map((item, index) => (
          <div key={index}>
            {loading ? (
              <div key={index}>
                <Skeleton animation="wave" height={20} width="10%" />
                <Skeleton animation="pulse" width={1210} height={218} />
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
                  loggedIn={!loggedIn}
                  user={user.userInfo._id}
                  gistId={item._id}
                />
              </div>
            )}
          </div>
        ))}
      </PostBox>
    </div>
  );
};

export default GistTemplate;
