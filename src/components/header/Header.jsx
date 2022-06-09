/* eslint-disable jsx-a11y/img-redundant-alt */
import "./header.css";
import blogbanner from '../images/blogbanner.png'

export default function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src={blogbanner}
        alt="Loading: Please wait for Image"
      />
    </div>
  );
}
