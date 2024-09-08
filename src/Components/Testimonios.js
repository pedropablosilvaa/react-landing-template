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
          En Témpanos nuestra prioridad es la calidad, 
          además de un servicio rápido y amable.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Tronia ql wena onda wn, siempre trae todo el yelo que le pido y de pana la wea
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Micho</h2>
      </div>
    </div>
  );
};

export default Testimonios;
