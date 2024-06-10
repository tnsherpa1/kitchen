import React from "react";
import clsx from "clsx";
import { InputTextAreaStyle, StyledDiv } from "./style";

type Props = {
  id: string;
  name: string;
  rows: number;
  cols: number;
  placeholder: string;
  label?: string;
  className?: string;
  error?: boolean;
  touched?: boolean;
  disabled?: boolean;
};
const InputTextArea = ({
  label,
  id,
  className,
  error,
  touched,
  disabled,
  placeholder,
  name,
  rows,
  cols,
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
        <InputTextAreaStyle
          id={id}
          className={clsx(className, {
            error: !!isError,
            disabled: disabled,
          })}
          placeholder={placeholder}
          name={name}
          rows={rows}
          cols={cols}
        />
      </div>
    </StyledDiv>
  );
};

export default InputTextArea;
