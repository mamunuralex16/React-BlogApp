import Post from "../../components/posts/Posts";
import "./jobs.css";
import img1 from '../../components/images/img1.jpg';
import Sidebar from "../../components/sidebar/Sidebar";
import ReactFooter from "../../components/react-footer/ReactFooter";


export default function Jobs() {
  return (
    <div>
    <div className="JobsContent">
      
      <Post img={img1} />
      <>
      <Sidebar />
      
      </>
      
    </div>
    <ReactFooter />
    </div>
  );
}
