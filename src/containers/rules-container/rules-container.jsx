import React, { useState,  useEffect } from "react";
import RulesBox from "../box/rules-box";
import Rule from "../../components/rule/rule";
import axios from "axios";
import styled from "styled-components";

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
  const [rules, setRules] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://smanhq.herokuapp.com/api/v1/rules?'
      );
 
      setRules(result.data.rule);
      console.log(result.data)
    };
 
    fetchData();
  }, []);

  return (
    <div>
      <RulesBox />
      <AllRules>
        {rules.map((item) => (
          <div key={item.id}>
            <Rule number={item.id} rule={item.rule} />
          </div>
        ))}
      </AllRules>
    </div>
  );
};

export default RulesContainer;
