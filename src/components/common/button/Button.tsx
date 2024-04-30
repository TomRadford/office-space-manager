import { cn } from "@/utils/classname";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = {
  regular: "bg-secondary",
  red: "bg-red",
  ghost: "bg-white text-secondary",
};

const Button = ({
  onClick,
  variant = "regular",
  children,
  type = "button",
}: {
  onClick?: () => void;
  variant?: keyof typeof buttonStyles;
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // cn util is used here to resolve conflicting styles
      // Note: Button is always fixed width and height
      className={cn(
        "mx-auto flex h-12 w-[232px] items-center justify-center rounded-[100px] p-4 text-white",
        buttonStyles[variant],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
