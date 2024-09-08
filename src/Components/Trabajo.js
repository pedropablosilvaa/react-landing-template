import React from "react";
import PickMeals from "../Assets/pick-ice-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Trabajo = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Elige tu Hielo",
      text: "Selecciona el tipo de hielo que necesitas, ya sea cubo, frappé, esfera o iceberg.",
    },
    {
      image: ChooseMeals,
      title: "Personaliza Tu Pedido",
      text: "Decide cuánto hielo necesitas y cuándo lo quieres recibir.",
    },
    {
      image: DeliveryMeals,
      title: "Entregas Rápidas",
      text: "Te entregamos el hielo a tiempo y en perfectas condiciones.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Cómo Funciona</p>
        <h1 className="primary-heading">Nuestro Proceso</h1>
        <p className="primary-text">
        En Témpanos hacemos el proceso fácil. Selecciona, personaliza 
        y recibe tu hielo en poco tiempo.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trabajo;
