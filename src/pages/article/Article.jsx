import Post from "../../components/posts/Posts";
import "./article.css";
import img1 from '../../components/images/img1.jpg';
import Sidebar from "../../components/sidebar/Sidebar";
import ReactFooter from "../../components/react-footer/ReactFooter";


export default function Article() {
  return (
    <div>
      <div className="article">
        
          <Post img={img1} />
          <>
            <Sidebar />
          
          </>
        
      </div>
      <ReactFooter />
    </div>
  );
}
