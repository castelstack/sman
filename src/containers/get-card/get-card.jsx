import React from 'react';
import { HeadText, SmText } from '../../constant/styles';
import styled from 'styled-components';
import Arrow from '../../images/arrow.svg';
import Temp from '../../images/temp.png';
import Done from '../../images/done.png';
import Bg from '../../images/bg.svg';
import Button from '../../components/button/button'

const Container = styled.div`
display:grid;
grid-template-rows: repeat(3, min-content);
grid-gap: 40px;
justify-items: center;
background: url(${Bg});
padding: 64px 165px;
margin: 30px;
`;

const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, min-content) ;
align-items: center;
padding-bottom: 100px;`;
const CardTemplate = styled.img` `;
const ArrowImg = styled.img` `;
const CardDone = styled.img` 
`;
const SubHeading = styled(SmText)`
color: red;`
const GetCard = () => {
    return (
        <Container>
            <HeadText>Get Your Identity Card Ready</HeadText>
            <SubHeading>*Information reaching us is that you have from now to 28 february to get yours*</SubHeading>
            <CardContainer>
                <CardTemplate src={Temp} />
                <ArrowImg src= {Arrow} />
                <CardDone src={Done}/>
            </CardContainer>
            <Button value='Generate ID Card' big/>
        </Container>
    );
};

export default GetCard;