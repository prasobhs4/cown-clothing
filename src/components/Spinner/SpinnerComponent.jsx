import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./Spinner.styles";

const SpinnerComponent = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  return Spinner;
};

export default SpinnerComponent;
