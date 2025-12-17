import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl shadow-lg w-full sm:w-auto text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        tealPrimary: "bg-electric-teal text-white font-medium hover:shadow-lg",
        tealSecondary: "border border-electric-teal font-medium text-electric-teal hover:bg-electric-teal/10",
        navyPrimary: "bg-tech-navy text-white font-medium hover:shadow-tech-navy/30",
        navySecondary: "border border-white text-white font-medium hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "tealPrimary",
      size: "lg",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
