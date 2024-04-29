import Link from "next/link";
import type { ComponentType } from "react";

/**
 * Simple wrapper around an icon component that
 * adds a click handler and correct styling.
 *
 * To set override the color: simply pass in the
 * `text-[color]` class to the className prop
 */
const IconWrapper = ({
  onClick,
  href,
  IconComponent,
  className = "text-primary",
}: {
  onClick?: () => void;
  href?: string;
  IconComponent: ComponentType;
  className?: string;
}) => {
  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        <IconComponent />
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        <IconComponent />
      </Link>
    );
  }

  return (
    <div className={className}>
      <IconComponent />
    </div>
  );
};

export default IconWrapper;
