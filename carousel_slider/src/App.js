import './App.css';
import React from "react";
import Slider from "react-slick";
import img1 from "../src/img/img1.jpg"
import img2 from "../src/img/img2.jpg"
import img3 from "../src/img/img3.jpg"
import img4 from "../src/img/img4.jpg"
import img5 from "../src/img/img5.jpg"

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="App">
      <h1>Carousel Slider</h1>
        <Slider {...settings} className="MagicScroll" data-options="autoplay: 1000; step: 1; mode: carousel; height: 275;">
      <div>
        <img src={img1} width="100%" height="500px"alt=""/>
      </div>
      <div>
        <img src={img2}  width="100%" height="500px" alt=""/>
      </div>
      <div>
        <img src={img3}  width="100%" height="500px" alt=""/>
      </div>
      <div>
        <img src={img4}  width="100%" height="500px" alt=""/>
      </div>
      <div>
        <img src={img5}  width="100%" height="500px" alt=""/>
      </div>
      
    </Slider>
    </div>
  );
}

export default App;
