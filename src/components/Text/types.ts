import React, { HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}
