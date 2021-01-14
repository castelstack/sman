import React from "react";
import Card from "./card";
import styled from "styled-components";


import { useState } from "react";

const Container= styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 70px;
  justify-content: space-around;
  margin-top: 40px;
`;
export default function GistCard() {

  
  const [card, setCard] = useState( {card: [
      {
        id: 1,
        title: "Urgent 2k",
        gist:
        "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neqused imperdiet nibh lectus feugiat nunc sem.",
        name: 'Wence'
      },
      {
        id: 2,
        title: "Transport",
        gist:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
          name: 'Wence'
      },
      {
        id: 3,
        title: "Gift",
        gist:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
          name: 'Wence'
      },
      {
        id: 4,
        title: "Date",
        gist:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
          name: 'Wence'
      },
      {
        id: 5,
        title: "Accomodation",
        gist:
          "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
          name: 'Wence'
          },
          {
            id: 6,
            title: "Accomodation",
            gist:
              "lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nequesed imperdiet nibh lectus feugiat nunc sem.",
          },
    ],})
  

    return (
      <Container>
            {
          card.card
            .filter((idx, item) => item < 3)
            .map(item => (
                    <div key={item.id}>
                <Card title={item.title} gist={item.gist} name={item.name}/>
                    </div>
                ))
       }
      </Container>
    );
  }

