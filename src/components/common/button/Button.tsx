import { cn } from "@/utils/classname";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = {
  regular: "bg-secondary",
  red: "bg-red",
  ghost: "bg-transparent text-secondary",
};

const Button = ({
  onClick,
  variant = "regular",
  children,
  type = "button",
  disabled = false,
}: {
  onClick?: () => void;
  variant?: keyof typeof buttonStyles;
  children: ReactNode;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      // cn util is used here to resolve conflicting styles
      // Note: Button is always fixed width and height
      className={cn(
        "mx-auto flex h-12 w-[232px] items-center justify-center rounded-[100px] p-4 text-sm font-medium uppercase text-white hover:opacity-90",
        { "opacity-80": disabled },
        buttonStyles[variant],
      )}
    >
      {children}
    </button>
  );
};

export default Button;
