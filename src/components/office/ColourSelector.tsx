import { cn } from "@/utils/classname";
import { OFFICE_COLOURS } from "@/utils/constants";

const ColourSelector = ({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (s: string) => void;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {OFFICE_COLOURS.map((colour) => (
        <button
          type="button"
          key={colour}
          onClick={() => onChange(colour)}
          className={cn(
            "buttonStyle h-9 w-9 rounded-full",
            selected === colour ? "border-selected border-4" : "",
          )}
          style={{ backgroundColor: colour }}
        />
      ))}
    </div>
  );
};
export default ColourSelector;
