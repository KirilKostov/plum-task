import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export function Carousel() {
  const [imageData, setImageData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesLength = imageData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    fetch("https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d")
      .then((res) => res.json())
      .then((data) => {
        setImageData(data.imageUrls.slice(0, 30));
      });
  }, []);

  return (
    <div className="carousel-container">
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        onClick={prevSlide}
        className="left-carousel-controller"
      />
      {imageData.map((item, index) => {
        return (
          <div key={index}>
            {index === currentSlide && (
              <div className="carousel-image-container">
                <img
                  srcSet={`${item}?w=480 480w,
                  ${item}?w=600 600w,
                  ${item}?w=800 800w`}
                  sizes="(max-width: 768px) 480px, (max-width: 1024px) 600px, 800px"
                  src={`${item}?w=800`}
                  alt=""
                />
              </div>
            )}
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        onClick={nextSlide}
        className="right-carousel-controller"
      />
    </div>
  );
}
