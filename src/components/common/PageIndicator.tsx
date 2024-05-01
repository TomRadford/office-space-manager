import { cn } from "@/utils/classname";

const Dot = ({ filled }: { filled: boolean }) => (
  <div
    className={cn("border-1 h-1 w-1 rounded-full border border-secondary", {
      "bg-secondary": filled,
    })}
  />
);

const PageIndicator = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  return (
    <div className="flex gap-[3px]">
      {new Array(totalPages).fill(0).map((_, i) => (
        <Dot key={i} filled={i + 1 === currentPage} />
      ))}
    </div>
  );
};
export default PageIndicator;
