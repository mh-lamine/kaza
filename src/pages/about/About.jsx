import bgimage from "../../assets/images/background2.png";
import "./About.scss";
import about from "../../assets/about.json";
import propTypes from "prop-types";
import Panel from "../../components/panel/Panel";

const About = () => {
  return (
    <div className="container">
      <img src={bgimage} />
      <div className="about">
        {about.map((about, index) => (
          <Panel key={index} title={about.title} data={about.description} />
        ))}
      </div>
    </div>
  );
}

About.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
};

export default About;
