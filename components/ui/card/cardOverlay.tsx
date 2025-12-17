import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./context";

interface CardOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showOnHover?: boolean;
}

export function CardOverlay({
  className,
  showOnHover = true,
  ...props
}: CardOverlayProps) {
  const { variant } = useCardContext();

  return (
    <div
      className={cn(
        "absolute inset-0 z-10",
        variant === "portfolio" && "bg-black/40",
        showOnHover &&
          "opacity-0 group-hover:opacity-100 transition",
        className
      )}
      {...props}
    />
  );
}
