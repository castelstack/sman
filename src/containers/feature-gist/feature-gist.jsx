import React from 'react';
import { HeadText, SmText } from '../../constant/styles';
import GistCard from '../../components/gist-card/gist-card'
import styled from "styled-components";

const Container = styled.div`
display:grid;
grid-template-rows: repeat(3, min-content);
grid-gap: 30px;
padding: 99px  ;
background: #843035;
justify-items: center;

@media only screen and (max-width: 750px) {
    grid-gap: 20px;
    padding: 99px  50px ;
    justify-content: center;
  }`

  const Heading = styled(HeadText)`
  color: #fff;
`;
const SubHead = styled(SmText)`
color: #fff;`
const FeatureGist = () => {
    return (
        <Container>
            <Heading>Stingy Men Gists</Heading>
<SubHead>Stingy Men don dey drop gists! you fit read and pass or join them   </SubHead>
            <div>
                <GistCard />            
            </div>
            
        </Container>
    );
};

export default FeatureGist;