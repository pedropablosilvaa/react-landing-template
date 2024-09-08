import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Acerca = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre nosotros</p>
        <h1 className="primary-heading">
        Un hielo de calidad, consistente y duradero
        </h1>
          <p className="primary-text">
            En Témpanos, sabemos que el hielo es clave para mantener tus bebidas frescas. 
            Ya sea en eventos, restaurantes o negocios, nuestro hielo garantiza una experiencia refrescante.
          </p>
          <p className="primary-text">
            Ofrecemos hielo en cubos, frappé, esfera e iceberg, adaptado a tus necesidades. 
            Siempre a tiempo, siempre fresco.
          </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Más Información</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Mira este video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Acerca;
