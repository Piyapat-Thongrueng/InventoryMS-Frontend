import { Link } from "react-router-dom";
import ApiService from "../service/ApiService";
import logo from "../assets/react.svg";

const logout = () => {
  ApiService.logout();
};

const Sidebar = () => {
  const isAuth = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();

  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <img src={logo} alt="logoreact" />
        <Link to="/dashboard" className="ims">IMS</Link>
      </div>
      <ul className="nav-links">
        {isAuth && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link to="/transaction">Transactions</Link>
          </li>
        )}

        {isAdmin && (
          <li>
            <Link to="/category">Category</Link>
          </li>
        )}

        {isAdmin && (
          <li>
            <Link to="/product">Product</Link>
          </li>
        )}

        {isAdmin && (
          <li>
            <Link to="/supplier">Supplier</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link to="/purchase">Purchase</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link to="/sell">Sell</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}

        {isAuth && (
          <li>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
