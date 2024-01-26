import classNames from "classnames";
import { ChangeEvent, InputHTMLAttributes, useMemo, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import s from "./input.module.scss";
import { EyeIcon } from "@assets/icons/EyeIcon";
import { CloseEyeIcon } from "@assets/icons/CloseEyeIcon";
import { SearchIcon } from "@assets/icons/SearchIcon";
import { ErrorMessage } from "@shared/error-message/error-message";

/**
 * Either register or pair value and onChange must be specified
 */
interface IVueInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
  isSearch?: boolean;
}

export const VueInput = (props: IVueInputProps) => {
  const {
    id,
    label,
    register,
    isSearch,
    error,
    type,
    autoComplete = "off",
    value,
    onChange,
    ...attrs
  } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const onShowPassword = () => setIsShowPassword(!isShowPassword);;

  const properties = useMemo(() => {
    if (!register && !onChange)
      throw new Error(
        "Either register or pair value and onChange must be specified"
      );
    if (register) return register;
    return {
      onChange: (e: ChangeEvent<HTMLInputElement>) => onChange!(e),
      value,
    };
  }, [onChange, register, value]);

  return (
    <div
      className={s.control}
    >
      {label && <label htmlFor={id} className={s.label}>
        {label}
      </label>}
      <div className={s.control__wrapper}>
        <input
         className={classNames(s.input, {
            [s.error]: error !== undefined
         })}
          type={isShowPassword ? "text" : type}
          id={id}
          {...attrs}
          {...properties}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={onShowPassword}
            className={s.btn__eye}
          >
            {isShowPassword ? <EyeIcon /> : <CloseEyeIcon />}
          </button>
        )}
        {(isSearch && type === "text") && (
          <button
            type="button"
            className={s.btn__search}
          >
            <SearchIcon />
          </button>
        )}
        <ErrorMessage error={error?.message} />
      </div>
    </div>
  );
};
