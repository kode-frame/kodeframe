import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "./variants";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  backgroundImage?: string;
  variant?: "default" | "outlined" | "image" | "portfolio";
}
