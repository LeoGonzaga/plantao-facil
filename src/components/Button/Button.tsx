import { ButtonProps } from "./types";

import "./styles.scss";
import { CSSProperties } from "react";

export const Button = ({ children, color, ...props }: ButtonProps) => {
  const colorText = color === "#fff" ? "#000" : "#fff";

  const style = {
    "--button-color": color,
    color: colorText,
  } as CSSProperties;

  return (
    <button className="button__container" {...props} style={style}>
      {children}
    </button>
  );
};
