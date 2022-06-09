import Post from "../post/Post";
import "./posts.css";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';



export default function Posts() {
  return (
    <div className="posts">
      <Post img={img1} />
      <Post img={img2} />
      <Post img={img3}/>
      <Post img={img4}/>
      <Post img={img1}/>
      <Post img={img3}/>
    </div>
  );
}
