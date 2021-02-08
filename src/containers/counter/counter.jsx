import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import styled from "styled-components";
import "./counter.style.css";
const Container = styled.div`
  padding: 65px;
  background: #fffdee;

  @media only screen and (max-width: 800px) {
    padding: 65px 50px;
  }

  @media only screen and (max-width: 600px) {
    padding: 65px 40px;
  }

  @media only screen and (max-width: 400px) {
    padding: 65px 20px;
  }
`;

const CounterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 5px;
  justify-content: space-between;
  padding: 15px 150px;

  background: #fffdee;
  @media only screen and (max-width: 1200px) {
    padding: 18px 80px;
  }

  @media only screen and (max-width: 800px) {
    padding: 18px 50px;
  }

  @media only screen and (max-width: 600px) {
    padding: 18px 20px;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: 400px) {
    padding: 18px 10px;
  }
`;

const Counter = () => {
  const [stats, setStats] = useState({
    rules: 0,
    gists: 0,
    users: 0,
  });

  const alert = useAlert();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://smanhq.herokuapp.com/api/v1/settings/stats?")
        .then((res) => {
          setStats(res.data.stats);
        })
        .catch((err) => alert.error(err.message));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <CounterBox>
        <div className="counter">
          <div className="counter-value">{stats.rules}</div>
          <h3 className="title">Rules</h3>
        </div>
        <div className="counter">
          <div className="counter-value">{stats.gists}</div>
          <h3 className="title">Stingy Gists</h3>
        </div>
        <div className="counter">
          <div className="counter-value">{stats.users}</div>
          <h3 className="title">Stingy Men</h3>
        </div>
      </CounterBox>
    </Container>
  );
};

export default Counter;
