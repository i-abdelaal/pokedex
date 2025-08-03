import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonTheme, type ButtonVariant, type ButtonColor, type ButtonSize } from "../../themes/buttonTheme";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export const Button = ({ type = "button", variant = "primary", size = "medium", color = "default", fullWidth = false, className = "", children, ...htmlProps }: ButtonProps) => {
  // Combine all classes using theme configuration
  const buttonClasses = clsx(buttonTheme.base, buttonTheme.sizes[size], buttonTheme.variants[variant][color], buttonTheme.width[fullWidth ? "full" : "auto"], className);

  return (
    <button type={type} className={buttonClasses} {...htmlProps}>
      {children}
    </button>
  );
};
