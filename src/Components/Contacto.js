import React from "react";

const Contacto = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tienes alguna duda?</h1>
      <h1 className="primary-heading">Contáctanos!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Contactar</button>
      </div>
    </div>
  );
};

export default Contacto;
