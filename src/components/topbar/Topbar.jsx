/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import "./topbar.css";
import alex from '../images/alex.jpg';

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      Logo
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">Portfolio</li>
          <li className="topListItem">
            <Link className="link" to="/contact">
            Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/scholarship">
              Scholarship
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/article">
              Article
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/jobs">
              Jobs
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img 
              className="topImg"
                src={alex} alt="Loading: Please wait for Image" 
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
