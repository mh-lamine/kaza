import { useParams } from "react-router-dom";
import "./Housing.scss";
import houseList from "../../assets/houses.json";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "../../assets/arrow.svg";
import arrow from "../../assets/arrow.svg";

export default function Housing() {
  const id = useParams().id;
  const house = houseList.find((house) => house.id == id);
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  const togglePanel = (e) => {
    console.log(showDescription);
    const text = e.target.parentElement.nextSibling;
    const arrow = e.target;
    if (e.target.previousSibling.innerText === "Description") {
      setShowDescription(!showDescription);
      arrow.style.transform = showDescription
        ? "rotate(0deg)"
        : "rotate(180deg)";
      text.style.transform = `translateY(${!showDescription ? "0" : "-100%"}`;
    } else {
      setShowEquipments(!showEquipments);
      arrow.style.transform = showEquipments
        ? "rotate(0deg)"
        : "rotate(180deg)";
      // text.style.transform = `translateY(${!showEquipments ? "0" : "-100%"}`;
    }
  };

  return (
    <div className="container">
      <img src={house.cover} />
      <div className="infos">
        <div className="title">
          <h2>{house.title}</h2>
          <p>{house.location}</p>
          <div className="tags">
            {house.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="host">
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
          <div className="host-info">
            <span>{house.host.name}</span>
            <img src={house.host.picture} />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature-item">
          <button>
            <h3>Description</h3>
            <img src={arrow} onClick={togglePanel} />
          </button>
          <p>{house.description}</p>
        </div>
        <div className="feature-item">
          <button>
            <h3>Équipements</h3>
            <img src={arrow} onClick={togglePanel} />
          </button>
          <ul>
            {house.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
