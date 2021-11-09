import React from "react";
import { Spinner } from 'reactstrap';

const LoadingSpinner = () => {
  return (
    <div>
      <Spinner color="primary" size="">
        Loading...
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;
