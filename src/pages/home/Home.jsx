import Card from "../../components/card/Card";
import "./Home.scss";
import bgimage from "../../assets/images/background1.png";
import { useState } from "react";
import housesList from "../../assets/houses.json";

export default function Home() {
  const [houses] = useState(housesList);

  return (
    <main>
      <div className="banner">
        <img src={bgimage} />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className="houses">
        {houses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </div>
    </main>
  );
}
