import { Link } from 'react-router-dom';
import './Header.scss';
import PropTypes from 'prop-types';

export const Header = ({id}) => {
  return (
    <header>
      <img src="/navlogo.png" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to={`/about/${id}`}>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
    id: PropTypes.string.isRequired
}
