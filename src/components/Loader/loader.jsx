import React from 'react';
import Loader from "react-loader-spinner";
import bg from "../../images/bg.svg";
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-items: center;
width: 100%;
height:100vh;
background-image: url(${bg});
background-repeat: no-repeat;
background-position: center;`;


const LoaderBox = () => {
    return (
        <Container>
              <Loader
        type="Bars"
        color="#843035"
        height={100}
        width={100}
        //3 secs
      />
        </Container>
    );
};

export default LoaderBox;