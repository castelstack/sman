import React from "react";
import Box from "../../containers/box/box";
import Counter from "../../containers/counter/counter";
import FeatureRules from "../../containers/feature-rules/feature-rules";
import FeatureGist from "../../containers/feature-gist/feature-gist";
import GetCard from "../../containers/get-card/get-card";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Homepage = () => {
  return (
    <Container>
      <Box />
      <Counter />
      <FeatureRules />
      <FeatureGist />
      <GetCard />
    </Container>
  );
};

export default Homepage;
