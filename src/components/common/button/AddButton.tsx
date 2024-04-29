import AddIcon from "@/components/common/icons/AddIcon";
import Link from "next/link";

const style =
  "fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90";

/**
 * Large add button that supports both onClick and href
 */
const AddButton = ({
  onClick,
  href,
}: {
  onClick?: () => void;
  href: string;
}) => {
  if (onClick)
    return (
      <button onClick={onClick} className={style}>
        <AddIcon />
      </button>
    );
  if (href)
    return (
      <Link href={href} className={style}>
        {" "}
        <AddIcon />
      </Link>
    );
  return null;
};

export default AddButton;
