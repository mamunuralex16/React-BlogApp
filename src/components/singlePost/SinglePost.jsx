/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import "./singlePost.css";
import img1 from '../images/img1.jpg';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={img1} alt="Loading: Please wait for Image" 
        />
        <h1 className="singlePostTitle">
          THIS IS POST HEADLINE
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=mamunur_alex">
                Mamunur Alex
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          বই পড়ুন:
          বই পড়লে তা শুধু আমাদের ভাষাই উন্নত করে না, সেইসঙ্গে অনেককিছু সম্পর্কে জ্ঞান এবং তথ্য দেয় যা অন্য কেউ আপনাকে শেখাতে
          পারবে না। এলন মাস্ক একবার একটি প্রেস কনফারেন্সে শেয়ার করেছিলেন যে তিনি ছোটবেলায় বিশ্বকোষ পড়তেন। নতুন প্রজন্মের জন্য, এলন
          পরামর্শ দিয়েছিলেন যে তাদের প্রচুর সাহিত্য পড়া উচিত। যতটা সম্ভব তথ্য শোষণ করার চেষ্টা করতে হবে, সেইসঙ্গে সাধারণ জ্ঞানের ভান্ডার সমৃদ্ধ করতে হবে।

          নেটওয়ার্কিং গুরুত্বপূর্ণ: 

          আপনি শুধু বাড়িতে বসে কাজ করতে পারবেন না। পেশাগতভাবে নিজেকে সাহায্য করার পাশাপাশি একজন ব্যক্তি হিসেবে বেড়ে ওঠার ক্ষেত্রে নেটওয়ার্কিং একটি গুরুত্বপূর্ণ অংশ।
          জীবনের বিভিন্ন স্তরের মানুষের সঙ্গে কথা বলুন। সেইসঙ্গে বিভিন্ন সেক্টর, পেশা এবং দক্ষতা থেকে আপনি যা পারেন তা শিখুন। এমনটাই পরামর্শ এলন মাস্কের।
        </p>
      </div>
    </div>
  );
}
