import IconWrapper from "@/components/common/icons/IconWrapper";
import type { ComponentType, ReactNode } from "react";

const CardItem = ({
  IconComponent,
  children,
}: {
  IconComponent: ComponentType;
  children: ReactNode;
}) => (
  <li className="flex gap-3">
    <div>
      <IconWrapper IconComponent={IconComponent} />
    </div>
    <div className="flex h-6 items-center text-xs">{children}</div>
  </li>
);

export default CardItem;
