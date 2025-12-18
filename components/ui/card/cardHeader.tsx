import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { CardHeaderProps } from "./types";
import { cardHeaderVariants } from "./variants";

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      title,
      subtitle,
      titleSize = "md",
      align = "left",
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
          "p-6 pb-3",
          className
        )}
        {...props}
      >
        {children ? (
          children
        ) : (
          <div className={cn(cardHeaderVariants({ align, titleSize }))}>
            {title && (
              <h4 className={cn(
                "font-semibold leading-none tracking-tight",
                titleSize === "sm" && "text-base",
                titleSize === "md" && "text-lg",
                titleSize === "lg" && "text-2xl",
              )}>
                {title}
              </h4>
            )}
            {subtitle && (
              <div className={cn(
                "text-gray-500",
                titleSize === "sm" && "text-sm",
                titleSize === "md" && "text-sm",
                titleSize === "lg" && "text-base",
              )}>
                {subtitle}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

export default CardHeader;