import React from "react";
import { ButtonArrow } from "../assets/svg/exportSvg";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="button">
      <div>{label}</div>
      <div className="icon">
        <ButtonArrow />
      </div>
    </div>
  );
};

export default Button;
