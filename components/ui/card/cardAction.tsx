import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { CardActionProps } from "./types";
import { cardActionVariants } from "./variants";

const CardAction = forwardRef<HTMLButtonElement, CardActionProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "left",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          cardActionVariants({ variant, size, fullWidth }),
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="ml-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

CardAction.displayName = "CardAction";

export default CardAction;