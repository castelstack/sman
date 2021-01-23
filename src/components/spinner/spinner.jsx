import React from 'react';
import { HeadText, SmText } from '../../constant/styles';
import Spin from '../../images/logo.svg';
import styled from 'styled-components';

const Container = styled.div` 

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 `;
const SpinnerContainer = styled.div` 
display: flex;
justify-content: center;
align-content: center;
padding: 50px;
 `;

const Heading = styled(HeadText)` color: #fff; 
font-size: 35px;

@media only screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 620px) {
    
`;
const SubHeading = styled(SmText)`color: #fff; 
font-size: 13px;
font-weight: 400; `;

const ImageSpinner = styled.img`

    width: 140px;
    height: 160px;
  
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    /* transform: rotate(3deg); */
     /* transform: rotate(0.3rad);/ */
     /* transform: rotate(3grad); */ 
     /* transform: rotate(.03turn);  */
  
  
  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }`
const Spinner = () => {
    return (
        <Container>
            <Heading>Generating Your Unique ID</Heading>
            <SubHeading>Upload your details for preview</SubHeading>
            <SpinnerContainer>
                <ImageSpinner src={Spin}/>
            </SpinnerContainer>
        </Container>
    );
};

export default Spinner;