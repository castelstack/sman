import React from 'react';
import { HeadText, MedText } from '../../constant/styles';
import Cir from '../../images/cir.png';
import Button from '../../components/button/button'
import styled from 'styled-components';

const Container = styled.div`
display:grid;
grid-template-rows: repeat(3, min-content);
grid-gap: 80px;
padding: 99px  ;
justify-items: center;
`;
const RulesBox = styled.div`
display: grid;
grid-template-columns: repeat(4, max-content);
justify-content: space-between;
grid-gap: 80px;
`;



const Icon = styled.img``;
const RuleInfo = styled.div`
display: grid;
grid-template-rows: repeat(3, max-content);
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
            <Button value='Read All Rules' big/>
        </Container>
    );
};

export default FeatureRules;