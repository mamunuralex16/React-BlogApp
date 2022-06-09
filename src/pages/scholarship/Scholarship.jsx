import Post from "../../components/posts/Posts";
import "./scholarship.css";
import img1 from '../../components/images/img1.jpg';
import Sidebar from "../../components/sidebar/Sidebar";
import ReactFooter from "../../components/react-footer/ReactFooter";


export default function Scholarship() {
  return (
    <div>
        <div className="ScholarshipContent">
        
          <Post img={img1} />
          <>
            <Sidebar />
          
          </>
          
        </div>
      <ReactFooter />
    </div>
  );
}
