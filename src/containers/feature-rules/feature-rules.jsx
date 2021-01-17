import React from 'react';
import { HeadText, MedText } from '../../constant/styles';
import Cir from '../../images/bg.svg';
import Button from '../../components/button/button'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
display:grid;
grid-template-rows: repeat(3, min-content);
grid-gap: 80px;
padding: 99px  ;
justify-items: center;


@media only screen and (max-width: 800px) {
    padding: 79px 40px ;
  }

  @media only screen and (max-width: 600px) {
    padding: 69px  20px;
  }
`;
const RulesBox = styled.div`
display: grid;
grid-template-columns: repeat(4, max-content);
justify-content: space-between;
grid-gap: 80px;

@media only screen and (max-width: 1200px) {
    grid-gap: 100px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-gap: 80px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
   
    grid-template-columns: repeat(1, 1fr);
  }
`;



const Icon = styled.img``;
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
const FeatureRules = () => {
    return (
        <Container>
            <HeadText>Stingy Men Rules</HeadText>
            <RulesBox>
                <RuleInfo>
                    <Icon src={Cir}/>
                    <RuleNumber>No 01.</RuleNumber>
                    <Rule>Thou Shalt Not Send Money To Any Girl</Rule>
                </RuleInfo>
           
                <RuleInfo>
                    <Icon src={Cir}/>
                    <RuleNumber>No 01.</RuleNumber>
                    <Rule>Thou Shalt Not Send Money To Any Girl</Rule>
                </RuleInfo>
                <RuleInfo>
                    <Icon src={Cir}/>
                    <RuleNumber>No 01.</RuleNumber>
                    <Rule>Thou Shalt Not Send Money To Any Girl</Rule>
                </RuleInfo>
                <RuleInfo>
                    <Icon src={Cir}/>
                    <RuleNumber>No 01.</RuleNumber>
                    <Rule>Thou Shalt Not Send Money To Any Girl</Rule>
                </RuleInfo>
            </RulesBox>
            <Link to='/rules-and-regulation'>
            <Button value='Read All Rules' big/>
            </Link>
        </Container>
    );
};

export default FeatureRules;