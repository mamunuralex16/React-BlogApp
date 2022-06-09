/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./marquee.css";

export default function Marquee() {
  return (
      <div className='marquee'>
        <marquee direction="left" speed={100} delay={0}>
         <h2 className='title'> BREAKING: THIS IS POST HEADLINE</h2>
        </marquee>
      </div>
  )
}
