import React, { useState, useEffect } from "react";
import { HeadText } from "../../constant/styles";
import axios from "axios";
import Button from "../../components/button/button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RuleBox from "./rule-box";
const Container = styled.div`
  display: grid;
  grid-template-rows:  min-content 1fr min-content;
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
  grid-template-columns: repeat(4, min-content);
  justify-content: space-between;
  align-items: start;
  grid-gap: 20px;
 

  @media only screen and (max-width: 1200px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FeatureRules = () => {
  const [rules, setRules] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://smanhq.herokuapp.com/api/v1/rules?")
        .then((res) => {
          setRules(res.data.rule);
          console.log(res.data);
        });

    };

    fetchData();
  }, []);
  return (
    <Container>
      <HeadText>Stingy Men Rules</HeadText>
      <RulesBox>
        {rules.filter((item, idx) => (idx<4))
        .map((item) => (
          <div key={item.id}>
            <RuleBox
              number={item.id}
              rule={item.title}
              id={item.id}
              count={item.likesCount}
            />
          </div>
        ))}
      </RulesBox>
      <Link to='/rules-and-regulation'>
        <Button value='Read All Rules' big />
      </Link>
    </Container>
  );
};

export default FeatureRules;
