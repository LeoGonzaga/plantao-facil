import { TagProps } from "./types";

import "./styles.scss";

export const Tag = ({ children, variant = "info" }: TagProps) => {
  return (
    <span className={`tag tag__${variant}`}>
      <div></div>

      {children}
    </span>
  );
};
