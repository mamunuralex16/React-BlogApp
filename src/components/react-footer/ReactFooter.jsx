/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./react-footer.css";
import mern from '../images/mern.png';


export default function ReactFooter() {
  return (
        <div className="main-footer">
            <div className="footer-row">
                <div className="footer-col">
                    <h4 className='hero_button'>basic info</h4>
                    <ul className='ul'>
                        <li><a href="#">about me</a></li>
                        <li><a href="#">education</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">activities</a></li>
                    </ul> 
                </div>
                <div className="footer-col">
                    <h4 className="hero_button">special</h4>
                    <ul className="ul">
                        <li><a href="#">blog</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">blood Bank</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="hero_button">using stack</h4>
                    <ul className='ul'>
                            <a href="#"><img src={mern} alt="Loading: Please wait for Image" /></a>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 className="hero_button">Developed By:</h4>
                    <ul className='ul'>
                        <li><a href='#'>Mamunur Rashid Alex</a></li>
                    </ul>
                    
                </div>
            </div> <br />
            <div className="copy">
                Copyright  &copy;{new Date().getFullYear()} Mamunur Rashid Alex, All Rights Reserved
            </div>
        </div>
  )
}
