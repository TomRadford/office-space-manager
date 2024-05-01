import IconWrapper from "@/components/common/icons/IconWrapper";
import SearchIcon from "@/components/common/icons/SearchIcon";
import TextInput from "@/components/common/input/TextInput";

const SearchInput = ({
  search,
  onSearch,
}: {
  search: string;
  onSearch: (s: string) => void;
}) => {
  return (
    <div className="relative h-full">
      <TextInput
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search"
      />
      <IconWrapper
        className="absolute right-3 top-0 flex h-full items-center"
        IconComponent={SearchIcon}
      />
    </div>
  );
};

export default SearchInput;
