import React, { useEffect } from "react";
import { withLazyImageContext } from "./LazyImageContext";
import "./lazyImage.css";

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

  useEffect(() => {
    if (lazyLoad) lazyLoad.update();
  }, [src, aspectRatio, lazyLoad]);

  return (
    <div className="lazyImage" style={{ paddingTop }}>
      <img className="lazyImage__img" data-src={src} />
    </div>
  );
};

export default withLazyImageContext(LazyImage);
