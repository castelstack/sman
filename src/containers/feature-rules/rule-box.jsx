import React from 'react';
import { HeadText, MedText } from '../../constant/styles';
import ruleImg from '../../images/rulee.svg';
import styled from 'styled-components';


const Container = styled.div`
`
const Icon = styled.img`
height: 4rem;
width: 3rem;
color: blue;`;
const RuleInfo = styled.div`
display: grid;
grid-template-rows: repeat(3, max-content);
grid-gap: 20px;
justify-items: center;`;
const RuleNumber = styled(HeadText)`
font-size: 18px;
line-height: 25px;`;
const Rule = styled(MedText)`
font-size: 16px;
width: 180px;
text-align: center;`;
const RuleBox = ({rule}) => {
  
    return (
        <Container>
           
                <RuleInfo>
                    <Icon src={ruleImg}/>
                    <RuleNumber>Stingy Rule!</RuleNumber>
                    <Rule>{rule}</Rule>
                </RuleInfo>
           
        </Container>
    );
};

export default RuleBox;