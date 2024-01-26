import { ErrorMessage } from "@shared/error-message/error-message";
import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form";
import s from "./checkbox.module.scss";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    error?: FieldError
};

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
    (props, ref) => {
      const {
        children,
        type,
        error,
        ...attrs
      } = props;
      return (
        <div className={s.checkbox}>
            <label className={s.checkbox__label}>
                <input type="checkbox" ref={ref} {...attrs} />
                {children}
            </label>
            <ErrorMessage error={error?.message} />
        </div>
      )
    }
)