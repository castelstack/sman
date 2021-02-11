import React, { useState, useEffect } from "react";
import { HeadText } from "../../constant/styles";
import axios from "axios";
import { Alert, TYPE } from "../../components/alert";
import Button from "../../components/button/button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RuleBox from "./rule-box";
import Truncate from "truncate";

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  grid-gap: 80px;
  padding: 99px;
  justify-items: center;
  background: #fafafa;
  @media only screen and (max-width: 800px) {
    padding: 79px 40px;
  }

  @media only screen and (max-width: 600px) {
    padding: 69px 20px;
  }
`;
const RulesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: space-between;
  align-items: start;
  grid-gap: 40px;

  @media only screen and (max-width: 1200px) {
    grid-gap: 25px;
  }

  @media only screen and (max-width: 800px) {
    grid-gap: 40px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FeatureRules = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://smanhq.herokuapp.com/api/v1/rules?sort=-createdAt")
        .then((res) => {
          setRules(res.data.rule);
        })
        .catch((err) => Alert(err.message), TYPE.WARNING);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <HeadText>Stingy Men Rules</HeadText>
      <RulesBox>
        {rules
          .filter((item, idx) => idx < 3)
          .map((item) => (
            <div key={item.id}>
              <RuleBox
                number={item.id}
                rule={Truncate(item.title, 100)}
                id={item.id}
                count={item.likesCount}
              />
            </div>
          ))}
      </RulesBox>
      <Link to="/rules-and-regulation">
        <Button value="Read All Rules" big />
      </Link>
    </Container>
  );
};

export default FeatureRules;
