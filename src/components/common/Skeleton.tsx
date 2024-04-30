import { cn } from "@/utils/classname";

const Skeleton = ({ className }: { className: string }) => (
  <div
    className={cn(
      `
      before:from-transparent
      before:to-transparent
      relative
      isolate
      overflow-hidden
      rounded-lg
      bg-gray/20
      opacity-60
      before:absolute before:inset-0
      before:-translate-x-full
      before:animate-[shimmer_2s_infinite]
      before:bg-gradient-to-r
      before:via-gray/30`,
      className,
    )}
  ></div>
);
export default Skeleton;
