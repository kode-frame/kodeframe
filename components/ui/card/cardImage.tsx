import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { useCardContext } from "./context";
import { CardImageProps } from "./types";
import { cardImageVariants } from "./variants";

const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  (
    {
      src,
      alt = "",
      aspectRatio = "auto",
      objectFit = "cover",
      overlay = false,
      overlayOpacity = "medium",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { variant } = useCardContext();

    const opacityClasses = {
      light: "bg-black/20",
      medium: "bg-black/40",
      dark: "bg-black/60",
    };

    return (
      <div
        ref={ref}
        className={cn(
          cardImageVariants({ aspectRatio, objectFit, overlay }),
          variant === "portfolio" && "group-hover:scale-105 transition-transform duration-500",
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full",
              objectFit === "cover" && "object-cover",
              objectFit === "contain" && "object-contain",
              objectFit === "fill" && "object-fill",
              variant === "portfolio" && "group-hover:scale-110 transition-transform duration-700"
            )}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
        )}

        {overlay && (
          <div className={cn("absolute inset-0", opacityClasses[overlayOpacity])} />
        )}

        {children}
      </div>
    );
  }
);

CardImage.displayName = "CardImage";

export default CardImage;