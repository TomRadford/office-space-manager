import BackIcon from "@/components/common/icons/BackIcon";
import IconWrapper from "@/components/common/icons/IconWrapper";

const Header = ({
  title,
  onClick,
  href,
}: {
  title: string;
  onClick?: () => void;
  href?: string;
}) => {
  return (
    <header className="grid w-full grid-cols-3 py-8">
      <IconWrapper
        className=" text-dark "
        onClick={onClick}
        href={href}
        IconComponent={BackIcon}
      />

      <h4 className="text-center">{title}</h4>
    </header>
  );
};

export default Header;
