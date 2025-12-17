import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./context";

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { variant, hasImage } = useCardContext();

  return (
    <div
      className={cn(
        "p-6 font-semibold",
        hasImage && "pt-4",
        variant === "portfolio" && "absolute bottom-0 z-10",
        className
      )}
      {...props}
    />
  );
}
