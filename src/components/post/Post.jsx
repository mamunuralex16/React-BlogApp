import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />

        <span className="postDate">20 April 2022, 03:00pm</span>

        <span className="postTitle">
          <Link to="/post/abc" className="link">
            This is Post Headline
          </Link>
        </span>
     
      <p className="postDesc">
        Post description Post description Post description Post description
        Post description Post description Post description Post description 
        Post description Post description Post description Post description 
      </p>
    </div>
  );
}
