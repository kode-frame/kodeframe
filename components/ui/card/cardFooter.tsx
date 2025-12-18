import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { CardFooterProps } from "./types";

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (
    {
      justify = "start",
      border = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const justifyClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "p-6 pt-3 flex items-center",
          justifyClasses[justify],
          border && "border border-gray-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter"

export default CardFooter;