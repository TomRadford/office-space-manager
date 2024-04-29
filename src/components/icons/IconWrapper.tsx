import type { ComponentType } from "react";

/**
 * Simple wrapper around an icon component that
 * adds a click handler and correct styling.
 */
const IconWrapper = ({
  onClick,
  IconComponent,
}: {
  onClick?: () => void;
  IconComponent: ComponentType;
}) =>
  onClick ? (
    <button onClick={onClick}>
      <IconComponent />
    </button>
  ) : (
    <div>
      <IconComponent />
    </div>
  );

export default IconWrapper;
