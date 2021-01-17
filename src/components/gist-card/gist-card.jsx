import React from "react";
import Card from "./card";
import styled from "styled-components";




const Container= styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 70px;
  justify-content: space-around;
  margin-top: 40px;

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

  
  const data = {
    card: [
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
      }
    ],
  }
  

 
  return (
      <Container>
            {
          data.card
            .map(item => (
                    <div key={item.id}>
                <Card title={item.title} gist={item.gist} name={item.name}/>
                    </div>
                ))
       }
      </Container>
    );
  }

