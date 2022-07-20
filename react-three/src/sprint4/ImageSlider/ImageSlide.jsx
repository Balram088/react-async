import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://miro.medium.com/max/700/0*ihTZPO4iffJ8n69_" },
    { url: "https://miro.medium.com/max/700/0*ihTZPO4iffJ8n69_" },
    { url: "https://miro.medium.com/max/700/0*ihTZPO4iffJ8n69_" },
    { url: "https://miro.medium.com/max/700/0*ihTZPO4iffJ8n69_" },
    { url: "https://miro.medium.com/max/700/0*ihTZPO4iffJ8n69_" },
    { url: "https://miro.medium.com/max/700/0*ihTZPO4iffJ8n69_" },
    { url: "https://miro.medium.com/max/700/0*ihTZPO4iffJ8n69_" },
  ];
export const ImageSlide = () => {
  return (
    <div>
    <SimpleImageSlider
      width={1200}
      height={504}
      images={images}
      showBullets={false}
      showNavs={true}
    />
  </div>
  )
}
