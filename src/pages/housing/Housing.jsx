import { useParams } from "react-router-dom";
import "./Housing.scss";
import houseList from "../../assets/houses.json";
import { FaStar } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function Housing() {
  const id = useParams().id;
  const house = houseList.find((house) => house.id == id);
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  const togglePanel = (e) => {
    const target = e.target.textContent;
    if (target === "Description") {
      setShowDescription(!showDescription);
    } else {
      setShowEquipments(!showEquipments);
    }
  };

  return (
    <div className="container">
      <img src={house.cover} />
      <h2>{house.title}</h2>
      <p>{house.location}</p>
      <div className="tags">
        {house.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="rating">
        {Array.from({ length: house.rating }).map((_, i) => (
          <span key={i} className="star">
            <FaStar />
          </span>
        ))}
        {Array.from({ length: 5 - house.rating }).map((_, i) => (
          <span key={i}>
            <FaStar />
          </span>
        ))}
      </div>
      <div className="features">
        <button onClick={togglePanel}>
          Description
          <span>{showDescription ? <FaChevronDown /> : <FaChevronUp />}</span>
        </button>
        {showDescription && <p>{house.description}</p>}
      </div>
      <div className="features">
        <button onClick={togglePanel}>
          Équipements
          <span>{showEquipments ? <FaChevronDown /> : <FaChevronUp />}</span>
        </button>
        {showEquipments && (
          <ul>
            {house.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
