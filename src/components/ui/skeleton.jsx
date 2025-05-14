import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="skeleton"
      className={cn("bg-[#80808027] animate-pulse ", className)}
      {...props} />)
  );
}

export { Skeleton }
