import React, { useState, useEffect, useContext } from "react";
import RulesBox from "../box/rules-box";
import Rule from "../../components/rule/rule";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";
import { ActiveContext } from "../../utils/store";

const AllRules = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  justify-content: space-between;
  margin: 160px 99px;

  @media only screen and (max-width: 800px) {
    margin: 100px 60px;
  }

  @media only screen and (max-width: 750px) {
    margin: 80px 59px;
  }

  @media only screen and (max-width: 600px) {
    margin: 80px 40px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 400px) {
    margin: 60px 20px;
  }
`;

const RulesContainer = () => {
  let user = useContext(ActiveContext);

  const [loading, setLoading] = useState(true);

  const [rules, setRules] = useState([1, 2, 3]);

  const [loggedIn, setLoggedIn] = React.useState(true);

  useEffect(() => {
    if (user.userInfo === undefined || user.userInfo._id.includes("_id")) {
      setLoggedIn(false);
    }
    axios
      .get("https://smanhq.herokuapp.com/api/v1/rules?sort=-createdAt")
      .then((res) => {
        setRules(res.data.rule);

        setLoading(false);
      });
  }, [user.userInfo]);

  return (
    <div>
      <RulesBox />
      <AllRules>
        {rules.map((item, index) => (
          <div key={index}>
            {loading ? (
              <div key={index}>
                <Skeleton animation="wave" height={20} width="10%" />
                <Skeleton animation="pulse" width="100%" height={80} />
                <Skeleton animation="wave" height={10} width="30%" />
              </div>
            ) : (
              <Rule
                number={index}
                rule={item.title}
                key={item.id}
                id={item.createdBy}
                likes={item.likesCount}
                liked={item.likes}
                loggedIn={loggedIn}
                user={user.userInfo._id}
                ruleId={item._id}
              />
            )}
          </div>
        ))}
      </AllRules>
    </div>
  );
};

export default RulesContainer;
