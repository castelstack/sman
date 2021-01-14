import React from 'react';
import { HeadText, SmText } from '../../constant/styles';
import GistCard from '../../components/gist-card/gist-card'
import styled from "styled-components";

const Container = styled.div`
display:grid;
grid-template-rows: repeat(3, min-content);
grid-gap: 30px;
padding: 99px  ;
background: #FFF8F8;
justify-items: center;`
const FeatureGist = () => {
    return (
        <Container>
            <HeadText>Stingy Men Gists</HeadText>
<SmText>Stingy Men don dey drop gists! you fit read and pass or join them   </SmText>
            <div>
                <GistCard />            
</div>
        </Container>
    );
};

export default FeatureGist;