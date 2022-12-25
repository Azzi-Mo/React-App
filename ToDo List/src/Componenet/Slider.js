import React from "react";
import img1 from './imgs/pexels-photo-1314584.webp'
import img2 from './imgs/pexels-photo-1698482.webp'
import img3 from './imgs/pexels-photo-5203196.jpeg'
import './Css Style/MainStyle.css'

function Slider() {
  return (
    <>
      <div 
        id="carouselExampleControls"
        class="carousel slide style"
        data-ride="carousel"
        
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img3} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
export default Slider;
