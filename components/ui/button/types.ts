import { HTMLMotionProps } from "framer-motion";
import { ButtonVariants } from "./variants";

export interface ButtonProps
  extends HTMLMotionProps<"button">, 
    ButtonVariants {}