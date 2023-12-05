import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = (props) => {

  return (
    <button className="estiloBoton" onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};

export default PrimaryButton;