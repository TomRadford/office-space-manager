import IconWrapper from "@/components/icons/IconWrapper";
import type { ComponentType, ReactNode } from "react";

const CardItem = ({
  IconComponent,
  children,
}: {
  IconComponent: ComponentType;
  children: ReactNode;
}) => (
  <div className="flex gap-3">
    <div>
      <IconWrapper IconComponent={IconComponent} />
    </div>
    <div className="flex h-6 items-center text-xs">{children}</div>
  </div>
);

export default CardItem;
