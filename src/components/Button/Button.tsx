import { JSX } from "react";
import { ButtonProps } from "./types";

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return <button {...props}>{children}</button>;
};
