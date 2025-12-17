import { cn } from "@/lib/utils/cn";
import { useCardContext } from "./context";

interface CardActionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showOnHover?: boolean;
  position?: "center" | "bottom";
}

export function CardAction({
  className,
  showOnHover = true,
  position = "center",
  ...props
}: CardActionProps) {
  const { variant } = useCardContext();

  return (
    <div
      className={cn(
        "absolute z-20 flex items-center justify-center",
        position === "center" && "inset-0",
        position === "bottom" && "inset-x-0 bottom-0 p-6",
        showOnHover &&
          "opacity-0 group-hover:opacity-100 transition",
        variant === "portfolio" && "text-white",
        className
      )}
      {...props}
    />
  );
}
