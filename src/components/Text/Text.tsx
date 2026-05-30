import { TextProps } from "./types";

export const Text = ({
  children,
  ...props
}: TextProps) => {
  return <div {...props}>{children}</div>;
};