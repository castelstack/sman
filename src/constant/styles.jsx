import styled from 'styled-components';

export const HeadText = styled.h1`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 55px;
line-height: 75px;
/* identical to box height */


color: #000000;

@media only screen and (max-width: 1200px) {
    font-size: 35px;
    line-height: 65px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 30px;
    line-height: 55px;
  }

  @media only screen and (max-width: 750px) {
    font-size: 22px;
    line-height: 45px;
  }
  
  @media only screen and (max-width: 600px) {
    font-size: 22px;
    line-height: 35px;
  }
  
   
  @media only screen and (max-width: 500px) {
    font-size: 22px;
    line-height: 25px;
  }
  `;

export const MedText = styled.h3`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 43px;
line-height: 25px

color: #18191F;

@media only screen and (max-width: 800px) {
    font-size: 35px;
  }


  
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 22px;
  }
  
  @media only screen and (max-width: 400px) {
    font-size: 28px;
    line-height: 18px;
  }`;

export const SmText = styled.h5`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 42px;
color: #18191F;

@media only screen and (max-width: 900px) {
    font-size: 18px;
    line-height: 32px;
  }
  
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
  
  @media only screen and (max-width: 400px) {
    font-size: 14px;
    line-height: 15px;
  }`;

  export const PostBox= styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  justify-content: space-between;
  margin: 80px 99px;

  @media only screen and (max-width: 800px) {
    margin: 75px 60px;
  }

  @media only screen and (max-width: 750px) {
    margin: 60px 59px;
  }

  @media only screen and (max-width: 600px) {
    margin: 50px 40px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 400px) {
    margin: 30px 20px;
    
  }
`;