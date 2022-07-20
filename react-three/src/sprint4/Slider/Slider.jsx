import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel/Carousel";
import { LazyImageProvider } from "./LazyImage/LazyImageContext";
import LazyImage from "./LazyImage/LazyImage";


const images = [
  "/img/1.jpeg",
  "/img/2.jpeg",
  "/img/3.jpeg",
  "/img/4.jpeg",
  "/img/5.jpeg",
  "/img/6.jpeg",
  "/img/7.jpeg"
];

export const Slider = () => (
  <LazyImageProvider>
    <Carousel>
      {images.map((image, i) => (
        <LazyImage aspectRatio={[14,8]} src={image} key={i} />
      ))}
    </Carousel>
  </LazyImageProvider>
);

