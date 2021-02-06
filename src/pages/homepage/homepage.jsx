import React from "react";
import Box from "../../containers/box/box";
import Counter from "../../containers/counter/counter";
import FeatureRules from "../../containers/feature-rules/feature-rules";
import FeatureGist from "../../containers/feature-gist/feature-gist";
import GetCard from "../../containers/get-card/get-card";

const Homepage = () => {
  return (
    <div>
      <Box />
      <Counter />
      <FeatureRules />
      <FeatureGist />
      <GetCard />
    </div>
  );
};

export default Homepage;
