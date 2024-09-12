import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonios = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonios</p>
        <h1 className="primary-heading">¿Qué dicen nuestros clientes?</h1>
        <p className="primary-text">
          Slogan Número 2
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing el
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Cliente n1</h2>
      </div>
    </div>
  );
};

export default Testimonios;
