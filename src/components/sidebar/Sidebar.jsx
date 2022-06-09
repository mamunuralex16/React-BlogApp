/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div><br></br>
      <h1 className="sidebarTitle">POPULER POST</h1>
      <div>
          <div className="fakeimg">THIS IS POST HEADLINE</div>
          <div className="fakeimg">THIS IS POST HEADLINE</div>
          <div className="fakeimg">THIS IS POST HEADLINE</div>
          <div className="fakeimg">THIS IS POST HEADLINE</div>
          <div className="fakeimg">THIS IS POST HEADLINE</div>
      </div>
      </div><br></br>

      <div>
        <h3 className="sidebarTitle">Categories</h3>
        <div>
        <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/posts?cat=scholarship">
                Scholarship
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=jobs">
                Jobs
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=article">
                Article
              </Link>
            </span>
          </div>
        </div>
      </div>
      <br></br>
      <div>
      <h3 className="sidebarTitleS">Keep in Touch</h3>
      <a href="https://github.com/mamunuralex16" className="fa fa-github"></a>
      <a href="https://www.linkedin.com/in/mamunuralex16/" className="fa fa-linkedin"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a href="https://www.facebook.com/mamunur.rashid.alex/" className="fa fa-facebook"></a>
      </div>

    </div>
  );
}
