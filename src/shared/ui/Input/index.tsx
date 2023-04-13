import { forwardRef } from "react";
import cn from "classnames";
import c from "./styles.module.css";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

const Input = forwardRef(
  (
    { helperText = "", error = false, label = "", ...props }: IProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <label className={c.container}>
        {!!label && (
          <span className={c.label}>
            {label}
            {props.required && <span className={c.requiredField}>*</span>}
          </span>
        )}
        <input
          {...props}
          className={cn(c.input, { [c.inputError]: error })}
          ref={ref}
        />
        {!!helperText && (
          <span className={cn(c.text, { [c.textError]: error })}>
            {helperText}
          </span>
        )}
      </label>
    );
  }
);

export default Input;
