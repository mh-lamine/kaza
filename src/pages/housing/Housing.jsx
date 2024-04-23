import { useParams } from "react-router-dom";
import "./Housing.scss";
import houseList from "../../assets/houses.json";
import Stars from "../../components/stars/Stars";
import Panel from "../../components/panel/Panel";
import Carousel from "../../components/carousel/Carousel";

export default function Housing() {
  const id = useParams().id;
  const house = houseList.find((house) => house.id == id);
  return (
    <div className="container">
      <Carousel pictures={house.pictures} />
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
        <Panel title={"Description"} data={house.description} />
        <Panel title={"Equipement"} data={house.equipments} />
      </div>
    </div>
  );
}
