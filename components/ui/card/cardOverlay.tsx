import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { CardOverlayProps } from "./types";
import { cardOverlayVariants } from "./variants";

const CardOverlay = forwardRef<HTMLDivElement, CardOverlayProps>(
  (
    {
      position = "center",
      gradient = "none",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardOverlayVariants({ position, gradient }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardOverlay.displayName = "CardOverlay";

export default CardOverlay;