/* eslint-disable react/jsx-no-undef */
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Marquee from "../../components/marquee/Marquee";
import ReactFooter from "../../components/react-footer/ReactFooter";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Marquee />
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />

      </div>
      <ReactFooter />
    </>
    
  );
}
