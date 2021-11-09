import React from "react";
import ReactLoading from 'react-loading';

const LoadingSpinner = () => {
  return (
    
      <ReactLoading className='mx-auto py-2' type="spinningBubbles" color="primary" height={'5%'} width={'5%'}/>
    
  );
};

export default LoadingSpinner;
