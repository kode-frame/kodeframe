import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "bg-white transition-all duration-300 overflow-hidden",
  {
    variants: {
      variant: {
        default: "border border-gray-200",
        image: "border-0 overflow-hidden",
        portfolio: "border-0 shadow-lg group",
        elevated: "border-0 shadow-lg",
        outline: "border-2 border-gray-300",
      },
      size: {
        sm: "max-w-xs w-full",
        md: "max-w-md w-full",
        lg: "max-w-lg w-full",
        full: "w-full",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      hoverEffect: {
        none: "",
        scale: "hover:scale-[1.02] cursor-pointer",
        shadow: "hover:shadow-xl cursor-pointer",
        grow: "hover:scale-[1.01] hover:shadow-lg cursor-pointer",
        float: "hover:shadow-lg hover:-translate-y-1 cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "lg",
      hoverEffect: "none",
    },
  }
);

export const cardImageVariants = cva(
  "w-full bg-gray-100 overflow-hidden",
  {
    variants: {
      aspectRatio: {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[16/9]",
        auto: "",
      },
      objectFit: {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
      },
      overlay: {
        true: "relative",
        false: "",
      },
    },
    defaultVariants: {
      aspectRatio: "auto",
      objectFit: "cover",
      overlay: false,
    },
  }
);

export const cardOverlayVariants = cva(
  "absolute inset-0 flex items-center justify-center p-6 transition-opacity",
  {
    variants: {
      position: {
        top: "items-start",
        center: "items-center",
        bottom: "items-end",
      },
      gradient: {
        none: "",
        top: "bg-linear-to-b from-black/60 to-transparent",
        bottom: "bg-linear-to-t from-black/60 to-transparent",
        radial: "bg-linear-to-br from-black/40 via-transparent to-transparent",
      },
    },
    defaultVariants: {
      position: "center",
      gradient: "none",
    },
  }
);

export const cardHeaderVariants = cva(
  "space-y-1",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      titleSize: {
        sm: "text-base",
        md: "text-lg",
        lg: "text-xl",
      },
    },
    defaultVariants: {
      align: "left",
      titleSize: "md",
    },
  }
);

export const cardActionVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500",
        ghost: "bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-gray-700 focus-visible:ring-red-500",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 rounded-md",
        lg: "h-12 px-6 text-lg rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);