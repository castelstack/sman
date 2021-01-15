import React from 'react';
import { HeadText, SmText } from '../../constant/styles';
import Spin from '../../images/logo.svg';
import styled from 'styled-components';

const Container = styled.div` 
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

 `;
const SpinnerContainer = styled.div` 
display: flex;
justify-content: center;
align-content: center;
padding: 100px;
 `;

const Heading = styled(HeadText)` color: #6D6D6D; `;
const SubHeading = styled(SmText)`color: #6D6D6D;  `;

const ImageSpinner = styled.img`

    width: 150px;
    height: 150px;
  
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
            <SubHeading>Wait for a few seconds, your ID would be ready right away!</SubHeading>
            <SpinnerContainer>
                <ImageSpinner src={Spin}/>
            </SpinnerContainer>
        </Container>
    );
};

export default Spinner;