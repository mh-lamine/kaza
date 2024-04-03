import Card from "../../components/card/Card";
import "./Home.scss";
import bgimage from "../../assets/images/background1.png";

export default function Home() {
  return (
    <main >
      <div className="banner">
        <img src={bgimage} alt="background image" />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <Card />
    </main>
  );
}
