import "./Carousel.scss";
import PropTypes from "prop-types";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const handleClick = (e) => {
    if (e.target.parentElement.className === "prev") {
      if (current === 0) {
        document.querySelector(".slides").style.transform = `translateX(-${pictures.length-1}00%)`;
        setCurrent(pictures.length-1);
        return;
      }
      document.querySelector(".slides").style.transform = `translateX(-${
        current - 1
      }00%)`;
      setCurrent(current - 1);
    }
    if (e.target.parentElement.className === "next") {
      if (current === pictures.length - 1) {
        document.querySelector(".slides").style.transform = `translateX(0)`;
        setCurrent(0);
        return;
      }
      document.querySelector(".slides").style.transform = `translateX(-${
        current + 1
      }00%)`;
      setCurrent(current + 1);
    }
  };
  return (
    <div className="carousel">
      <button className="prev">
        <img src={arrow} onClick={handleClick} />
      </button>
      <button className="next">
        <img src={arrow} onClick={handleClick} />
      </button>
      <div className="slides">
        {pictures.map((picture, index) => (
          <img key={index} src={picture} />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Carousel;
