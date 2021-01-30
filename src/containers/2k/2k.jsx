import React, { useState, useEffect } from "react";
import GistsPost from "../../components/gist-card/gists-post";
import { PostBox } from "../../constant/styles";

import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

const Urgent2k = () => {
  const [loading, setLoading] = useState(true);
  const [gists, setGists] = useState([]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      axios.get("https://smanhq.herokuapp.com/api/v1/gists").then((res) => {
        console.log(res.data);
      setGists(res.data.gist);
        setLoading(false);
      });
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <PostBox>
        
         {gists.map((item) => (
          <div key={item.id}>
            {loading ? (
              <div>
                <Skeleton animation='wave' height={20} width='10%' />
                <Skeleton animation='pulse' width={1210} height={218} />
                <Skeleton animation='wave' height={10} width='30%' />
              </div>
            ) : (
              <div key={item.id}>
              <GistsPost
                tag={item.title}
                gistspost={item.description}
                image={item.image}
                name={item.createdBy}
              />
            </div>
            )}
          </div>
        ))}
      </PostBox>
    </div>
  );
};

export default Urgent2k;
