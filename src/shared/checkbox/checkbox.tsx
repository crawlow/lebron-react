import { ErrorMessage } from "@shared/error-message/error-message";
import { ChangeEvent, InputHTMLAttributes, forwardRef, useMemo } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import s from "./checkbox.module.scss";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  register?: UseFormRegisterReturn;
}

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (props, ref) => {
    const { children, type, error, id, register, checked, onChange, ...attrs } = props;

    const properties = useMemo(() => {
      if (!register && !onChange)
        throw new Error(
          "Either register or pair value and onChange must be specified"
        );
      if (register) return register;
      return {
        onChange: (e: ChangeEvent<HTMLInputElement>) => onChange!(e),
        checked,
      };
    }, [onChange, register, checked]);

    return (
      <div className={s.checkbox}>
        <label htmlFor={id} className={s.checkbox__label}>
          <input type="checkbox" id={id} ref={ref} {...properties} {...attrs} />
          {children}
        </label>
        <ErrorMessage error={error?.message} />
      </div>
    );
  }
);
