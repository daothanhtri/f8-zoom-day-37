import React from "react";

import styles from "./withLoading.module.scss";

const LoadingSpinner = () => (
  <div className={styles.spinnerContainer}>
    {" "}
    <div className={styles.loader}></div>
  </div>
);

const withLoading = (WrappedComponent) => {
  function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    return <WrappedComponent {...props} />;
  }

  WithLoadingComponent.displayName = `WithLoading(${getDisplayName(
    WrappedComponent
  )})`;

  return WithLoadingComponent;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withLoading;
