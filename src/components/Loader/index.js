import React from "react";
import { Loader as SemanticLoader, Dimmer } from "semantic-ui-react";

const Loader = () => {
  return (
    <Dimmer active={true}>
      <SemanticLoader />
    </Dimmer>
  );
}

export { Loader };