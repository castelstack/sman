import React from 'react';
import { HeadText, MedText } from '../../constant/styles';
import ruleImg from '../../images/rulee.svg';
import styled from 'styled-components';


const Container = styled.div`
background-color: white;
width: 250px;
min-height: 10rem;





display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
padding: 20px;
margin: 5px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`
const Icon = styled.img`
height: 4rem;
width: 3rem;
color: blue;`;
const RuleInfo = styled.div`
display: grid;
grid-template-rows: repeat(4, max-content);
grid-gap: 20px;
justify-items: center;`;
const RuleNumber = styled(HeadText)`
font-size: 18px;
line-height: 25px;`;
const Rule = styled(MedText)`
font-size: 16px;

text-align: center;`;
const Hr = styled.hr`
  
 
    display: block;
    border: none;
    height: 3px;
    background-color: #843035;
    margin: 0px;`
const RuleBox = ({rule}) => {
  
    return (
        <Container>
           
                <RuleInfo>
                    <Icon src={ruleImg}/>
                <RuleNumber>Stingy Rule!</RuleNumber>
                <Hr/>
                    <Rule>{rule}</Rule>
                </RuleInfo>
           
        </Container>
    );
};

export default RuleBox;