import { cn } from "@/lib/utils/cn";

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-t border-slate-200 flex items-center gap-2",
        className
      )}
      {...props}
    />
  );
}
