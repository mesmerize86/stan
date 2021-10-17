import React, {useState} from 'react';
import LoadingComponent from './loadingComponent';

const Index = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);
    const setLoadingState = isComponentLoading => {
      setLoading(isComponentLoading);
    }
    return (
      <>
        {isLoading && <LoadingComponent message={loadingMessage}/>}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }
  return HOC;
};

export default Index;