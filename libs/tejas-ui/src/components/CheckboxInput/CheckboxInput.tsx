import React from 'react';

export interface CheckboxInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: React.ReactNode;
  id?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}
const CheckboxInput = React.forwardRef(
  (props: CheckboxInputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    const {
      className = '',
      labelClassName = '',
      inputClassName = '',
      id = '',
      label,
      name,
    } = props;

    return (
      <label className={`flex items-center ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          name={name}
          id={id}
          className={inputClassName}
          {...props}
        />
        <span className={`pl-4 ${labelClassName}`}>{label}</span>
      </label>
    );
  }
);

export default CheckboxInput;
