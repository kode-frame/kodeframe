import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./context";

interface CardImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: "square" | "video" | "auto";
}

export function CardImage({
  className,
  ratio = "auto",
  ...props
}: CardImageProps) {
  const { variant } = useCardContext();

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        ratio === "square" && "aspect-square",
        ratio === "video" && "aspect-video",
        variant === "portfolio" && "absolute inset-0"
      )}
    >
      <img
        className={cn(
          "h-full w-full object-cover",
          variant === "portfolio" && "group-hover:scale-105 transition"
        )}
        {...props}
      />
    </div>
  );
}
