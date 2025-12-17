import { cn } from "@/lib/utils/cn";
import { Children, isValidElement } from "react";
import CardContext from "./context";
import { CardProps } from "./types";
import { cardVariants } from "./variants";
import { CardImage } from "./cardImage";

export function Card({
  className,
  variant = "default",
  hover,
  backgroundImage,
  children,
  ...props
}: CardProps) {
  const hasImage = Children.toArray(children).some (
    (child) => isValidElement(child) && child.type === CardImage
  );

  return (
    <CardContext.Provider value={{ variant, hasImage }}>
      <div
        className={cn(cardVariants({ variant, hover }), className)}
        {...props}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}
