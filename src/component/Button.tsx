import React from "react";
import { ButtonArrow } from "../assets/svg/exportSvg";

interface ButtonProps {
  label: string;
  event?: any
}

const Button: React.FC<ButtonProps> = ({ label, event }) => {
  return (
    <div className="button" onClick={event}>
      <div>{label}</div>
      <div className="icon">
        <ButtonArrow />
      </div>
    </div>
  );
};

export default Button;
