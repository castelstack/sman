import React, { useState, useEffect } from "react";
import Card from "./card";
import { trimText } from "../../constant/text";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 70px;
  justify-content: space-around;
  margin-top: 40px;
  padding: 1rem 2rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, min-content);
  }

  @media only screen and (max-width: 900px) {
    grid-gap: 20px;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, min-content);
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, min-content);
    width: 10rem;
  }
`;
export default function GistCard() {
  const [gists, setGists] = useState([
    { title: "This Is A Place Holder For Gists" },
  ]);

  useEffect(() => {
    axios
      .get("https://smanhq.herokuapp.com/api/v1/gists?sort=likesCount&limit=3")
      .then((res) => {
        setGists(res.data.gist);
      });
  }, []);

  return (
    <Container>
      {gists.map((item, index) => (
        <div key={index}>
          <Card
            key={item.title}
            title={trimText(item.title)}
            gist={item.description}
            name={item.createdBy}
          />
        </div>
      ))}
    </Container>
  );
}
