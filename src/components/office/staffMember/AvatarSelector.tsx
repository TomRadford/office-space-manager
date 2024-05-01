import { cn } from "@/utils/classname";
import { STAFF_MEMBER_AVATARS } from "@/utils/constants";

const AvatarSelector = ({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (s: string) => void;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {STAFF_MEMBER_AVATARS.map((avatarUri) => (
        <button
          type="button"
          key={avatarUri}
          onClick={() => onChange(avatarUri)}
          className={cn(
            "buttonStyle h-[52px] w-[52px] rounded-full transition-[border]",
            selected === avatarUri ? "border-4 border-secondary" : "",
          )}
        >
          <img src={avatarUri} alt="Avatar" />
        </button>
      ))}
    </div>
  );
};
export default AvatarSelector;
