import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "relative h-full rounded-2xl transition-all overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-soft-grey shadow-md p-6",
        outlined: "border border-soft-grey p-6",
        image: "bg-cover bg-center min-h-[240px]",
        portfolio: "bg-soft-grey text-white min-h-[300px] cursor-pointer",
      },
      hover: {
        true: "hover:shadow-xl hover:-translate-y-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: true,
    },
  }
);
