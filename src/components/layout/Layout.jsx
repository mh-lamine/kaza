import { Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
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
