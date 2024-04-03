import PropTypes from 'prop-types';
import './Card.scss';
import { Link } from 'react-router-dom';

export default function Card({house}) {
  return (
    <Link to={`housing/${house.id}`} className='card'>
      <img src={house.cover} />
      <h3>{house.title}</h3>
    </Link>
  )
}

Card.propTypes = {
  house: PropTypes.object.isRequired
}
