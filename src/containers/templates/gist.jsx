import React, { useState, useEffect } from "react";
import GistsPost from "../../components/gist-card/gists-post";
import { PostBox } from "../../constant/styles";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";


const GistTemplate = ({ tag }) => {
  const [loading, setLoading] = useState(true);

  const [gists, setGists] = useState([1, 2, 3]);

  const needle = tag !== null ? tag : "";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://smanhq.herokuapp.com/api/v1/gists?${needle}`)
      .then((res) => {
        setGists(res.data.gist);

        setLoading(false);
      });
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
