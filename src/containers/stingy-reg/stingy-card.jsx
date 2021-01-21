import React from "react";

import Logo from "../../images/logo.svg";
import sim from "../../images/sim.png";
import bg from "../../images/bg.svg";
import barcode from "../../images/barcode.jpg";
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: max-content min-content;
grid-gap: 5px;
width: 640;
height: 472;
background-image: url(${bg});
background-repeat: no-repeat;
border: solid 1px grey;
padding: .5rem .5rem .5rem .5rem;
border-radius: 5px;
`;
const LogoHead = styled.div`
display: grid;
grid-template-columns: min-content max-content;
align-items: center;
grid-gap: 15px;
grid-column: 1/-1;
`;
const Profile = styled.div`
display: grid;
grid-template-columns: 1fr;`;
const SimPro = styled.div`
display: grid;
grid-template-columns: min-content 1fr;`;
const BarPro = styled.div`
display: grid;
grid-template-columns: 1fr;`;
const Heading = styled.div`
display: grid;
grid-template-rows: repeat(2, min-content);
justify-items: center`;
const LogoImg = styled.img``;
const Sim = styled.img`
width: 3rem;
height: 3rem;`;
const Barcode = styled.img`
width: 10rem;
height: 3rem;`;
const ProImg = styled.img`
width: 8rem;
height: 8rem;
margin-left: 3px;`;
const Head = styled.h1`
color: #843035;
font-size: 17px;
font-weight: bold;

font-family: 'Acme', sans-serif;
font-style: normal;
font-weight: bold;
`;
const IdForm = styled.h1`
color: #843035;
font-size: 13px;
font-weight: bold;

font-family: 'Acme', sans-serif;
font-style: normal;
font-weight: bold;
`;
const SmallText = styled.h5`
color: black;
font-size: 12px;`;

const StingyCard = ({names, position, location, sman_id, image}) => {
 
  return (
    <Container>
      <LogoHead>
        <LogoImg src={Logo} alt='logo' />
        <Heading>
          <Head>STINGY MEN ASSOCIATION</Head>
          <SmallText>Motto: Let me see what I can do</SmallText>
        </Heading>
      </LogoHead>

      <BarPro>
        <SimPro>
          <Sim src={sim} alt='sim' />
         
            <Profile >
              <IdForm>IDENTITY CARD</IdForm>
              <SmallText>Name: {names}</SmallText>
              <SmallText>Position: {position}</SmallText>
              <SmallText>Location: {location}</SmallText>
              <SmallText>SMAN ID: {sman_id}</SmallText>
            </Profile>
        
        </SimPro>
        <Barcode src={barcode} alt='barcode' />
      </BarPro>
      <ProImg src={image} alt='add image' />
    </Container>
  );
};

export default StingyCard;
