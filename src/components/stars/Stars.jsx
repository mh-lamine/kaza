import { FaStar } from "react-icons/fa";
import "./Stars.scss";
import PropTypes from "prop-types";

const Stars = ({rating}) => {
  return (
    <div className="rating">
      {Array.from({ length: parseInt(rating) }).map((_, i) => (
        <span key={i} className="star">
          <FaStar />
        </span>
      ))}
      {Array.from({ length: 5 - parseInt(rating) }).map((_, i) => (
        <span key={i}>
          <FaStar />
        </span>
      ))}
    </div>
  );
}

Stars.propTypes = {
  rating: PropTypes.string.isRequired
}

export default Stars