import React, { useState, useEffect, useCallback } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import { PrevBtn, NextBtn, DotBtn } from "./CarouselButtons";
import "./carousel.css";

const EmblaCarouselComponent = ({ children }) => {
  const [carousel, initCarousel] = useState(null);
  const [prevBtnEnabled, togglePrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, toggleNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => carousel.scrollPrev(), [carousel]);
  const scrollNext = useCallback(() => carousel.scrollNext(), [carousel]);
  const scrollTo = useCallback(index => carousel.scrollTo(index), [carousel]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(carousel.selectedScrollSnap());
      togglePrevBtnEnabled(carousel.canScrollPrev());
      toggleNextBtnEnabled(carousel.canScrollNext());
    };
    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList());
      carousel.on("select", onSelect);
      onSelect();
    }
    return () => carousel && carousel.destroy();
  }, [carousel]);

  return (
    <div className="carousel">
      <div className="carousel__wrap">
        <EmblaCarouselReact
          className="carousel__viewport"
          emblaRef={initCarousel}
          options={{ loop: false }}
          htmlTagName="div"
        >
          <div className="carousel__container">
            {children.map((Child, index) => (
              <div className="carousel__item" key={index}>
                {Child}
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
        <PrevBtn onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextBtn onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="carousel__dots">
        {scrollSnaps.map((snap, index) => (
          <DotBtn
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarouselComponent;
