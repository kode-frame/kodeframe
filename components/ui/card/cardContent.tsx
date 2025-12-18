import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { CardContentProps } from "./types";

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  (
    {
      compact = false,
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
          "p-6",
          compact && "py-3",
          "grow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent"

export default CardContent;