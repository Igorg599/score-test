import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
      <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="140" r="140" /> 
        <rect x="0" y="299" rx="4" ry="4" width="294" height="25" /> 
        <rect x="1" y="340" rx="11" ry="11" width="282" height="65" />
      </ContentLoader>
    )
}

export default LoadingBlock;