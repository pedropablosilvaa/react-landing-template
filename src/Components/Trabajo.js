import React from "react";
import StepOne from "../Assets/pick-ice-image.png";
import StepTwo from "../Assets/choose-image.png";
import StepThree from "../Assets/delivery-image.png";

const Trabajo = () => {
  const workInfoData = [
    {
      image: StepOne,
      title: "Paso 1",
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate.",
    },
    {
      image: StepTwo,
      title: "Paso 2",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.",
    },
    {
      image: StepThree,
      title: "Paso 3",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Cómo Funciona</p>
        <h1 className="primary-heading">Nuestro Proceso</h1>
        <p className="primary-text">
        Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium.
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
