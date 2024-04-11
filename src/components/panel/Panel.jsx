import "./Panel.scss";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";
import PropTypes from "prop-types";

const Panel = ({ title, data }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  const togglePanel = (e) => {
    const text = e.target.parentElement.nextSibling;
    const arrow = e.target;
    if (e.target.previousSibling.innerText === "Description") {
      setShowDescription(!showDescription);
      arrow.style.transform = showDescription
        ? "rotate(0deg)"
        : "rotate(180deg)";
      text.style.height = `${!showDescription ? "fit-content" : "0"}`;
      text.style.padding = `${!showDescription ? "10px" : "0 10px"}`;
    } else {
      setShowEquipments(!showEquipments);
      arrow.style.transform = showEquipments
        ? "rotate(0deg)"
        : "rotate(180deg)";
      text.style.height = `${!showEquipments ? "fit-content" : "0"}`;
      text.style.padding = `${!showEquipments ? "10px" : "0 10px"}`;
    }
  };

  return (
    <div className="feature-item">
      <button>
        <h3>{title}</h3>
        <img src={arrow} onClick={togglePanel} />
      </button>
      {typeof data === "string" ? (
        <p>{data}</p>
      ) : (
        <ul>
          {data.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Panel;
