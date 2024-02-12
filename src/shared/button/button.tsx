import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef } from "react";
import s from "./button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = "primary",
      onClick,
      isLoading,
      className,
      disabled,
      ...attrs
    } = props;
    return (
      <button
        ref={ref}
        className={classNames(s.button, className, {
          [s.secondary]: variant === "secondary",
          [s.loading]: isLoading,
        })}
        onClick={
          isLoading || disabled || onClick === undefined ? undefined : onClick
        }
        disabled={disabled}
        {...attrs}
      >
        {children}
      </button>
    );
  }
);
