import React from 'react';
import { HeadText } from "../../constant/styles";
import Button from "../../components/button/button";
import styled from "styled-components";
import { TextField } from '@material-ui/core';

const Container = styled.div`
margin: 20px 110px;`;

const WriteIn = styled.div`
margin-bottom: 200px;`;

const HeadBox = styled.div`
display: flex;
justify-content: space-between;
padding: 50px 0;

`;

const Heading = styled(HeadText)`
font-size: 45px;
line-height: 61px;

color: #C4C4C4;`;
// create new rules
const writeRules = () => {
    return (
        <Container>
            



        <HeadBox>
            <Heading>Write Your Rule</Heading>
            <Button value='Post'/>
            </HeadBox>
            <WriteIn>

        <TextField
          id="outlined-multiline-static"
          label="Write your rules"
          multiline
                rows={20}
                fullWidth
          defaultValue="Your Stingy Rule"
          variant="outlined"
        />
            </WriteIn>

        </Container>
    );
};

export default writeRules;