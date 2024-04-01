import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="container">
      <header>
        <img src="/navlogo.png" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/housing">Housing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <img src="" alt="logo" />
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
