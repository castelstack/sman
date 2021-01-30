import React, { useState, useEffect } from "react";
import RulesBox from "../box/rules-box";
import Rule from "../../components/rule/rule";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
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
  const [loading, setLoading] = useState(true);
  const [rules, setRules] = useState([]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(true);
      axios.get("https://smanhq.herokuapp.com/api/v1/rules?").then((res) => {
        console.log(res.session);
        
        setRules(res.data.rule);
        setLoading(false);
      }
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <RulesBox />
      <AllRules>
        {rules.map((item) => (
          <div key={item.id}>
            {loading ? (
              <div>
                <Skeleton animation='wave' height={20} width='10%' />
                <Skeleton animation='pulse' width='100%' height={218} />
                <Skeleton animation='wave' height={10} width='30%' />
              </div>
            ) : (
              <Rule
                number={item.id}
                rule={item.title}
                id={item.createdBy}
                count={item.likesCount}
              />
            )}
          </div>
        ))}
      </AllRules>
    </div>
  );
};

export default RulesContainer;
