import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { CardContext } from "./context";
import { CardProps } from "./types";
import { cardVariants } from "./variants";

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      size = "md",
      rounded = "lg",
      hoverEffect = "none",
      className,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? "div" : "div";

    return (
      <CardContext.Provider value={{ variant, size }}>
        <Component
          ref={ref}
          className={cn(
            cardVariants({ variant, size, rounded, hoverEffect }),
            "flex flex-col h-full",
            className
          )}
          {...props}
        >
          {children}
        </Component>
      </CardContext.Provider>
    );
  }
);

Card.displayName = "Card";

export default Card;