import { useParams } from "react-router-dom";
import "./Housing.scss";
import houseList from "../../assets/houses.json";
import { useState } from "react";
import "../../assets/arrow.svg";
import arrow from "../../assets/arrow.svg";
import Stars from "../../components/stars/Stars";

export default function Housing() {
  const id = useParams().id;
  const house = houseList.find((house) => house.id == id);
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
          <Stars rating={house.rating} />
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
