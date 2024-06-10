import React from "react";
import { InputStyle, StyledDiv } from "./style";
import clsx from "clsx";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  className?: string;
  error?: boolean;
  touched?: boolean;
  disabled?: boolean;
};
const InputField = ({
  label,
  id,
  className,
  error,
  touched,
  disabled,
  placeholder,
  name,
}: Props) => {
  const isError = error && touched;

  return (
    <StyledDiv>
      {label && (
        <label htmlFor={id} className="label-wrapper">
          {label}
        </label>
      )}

      <div className="input-wrap">
        <InputStyle
          id={id}
          className={clsx(className, {
            error: !!isError,
            disabled: disabled,
          })}
          placeholder={placeholder}
          name={name}
          type="text"
        />
      </div>
    </StyledDiv>
  );
};

export default InputField;
