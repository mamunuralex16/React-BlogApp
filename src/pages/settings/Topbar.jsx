/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import "./topbar.css";
import alex from '../images/alex.jpg';
import sitelogo from '../images/sitelogo.png';

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      <img 
        className="topImgL"
          src={sitelogo} alt="Loading: Please wait for Image" 
      />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">Portfolio</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Scholarship</li>
          <li className="topListItem">Article</li>
          <li className="topListItem">Jobs</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
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
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
