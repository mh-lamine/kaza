import { useParams } from "react-router-dom";
import "./Housing.scss";
import houseList from "../../assets/houses.json";
import { FaStar } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { Header } from "../../components/header/Header";

export default function Housing() {
  const id = useParams().id;
  const house = houseList.find((house) => house.id == id);
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);
  return (
    <>
      <Header id={house.id} />
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
        <button>
          Description
          <span>{showDescription ? <FaChevronDown /> : <FaChevronUp />}</span>
        </button>
        <button>
          Équipements
          <span>{showEquipments ? <FaChevronDown /> : <FaChevronUp />}</span>
        </button>
      </div>
    </>
  );
}
