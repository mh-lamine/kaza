import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <img src="/navlogo.png" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to={"about"}>A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <Outlet />
      </div>
      <footer>
        <div className="content">
          <img src="/footerlogo.png" alt="logo" />
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
