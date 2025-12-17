import { cn } from "@/lib/utils/cn";

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-6 pb-6 text-sm text-slate-600", className)}
      {...props}
    />
  );
}
