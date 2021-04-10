import React from 'react';

export interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    const {
      className = '',
      labelClassName = '',
      inputClassName = '',
      label,
      name,
    } = props;
    return (
      <label className={`block ${className}`}>
        <span className={`text-gray-700 font-semibold ${labelClassName}`}>
          {label}
        </span>
        <input
          ref={ref}
          type="text"
          name={name}
          className={`${inputClassName}`}
          placeholder={label}
          {...props}
        />
      </label>
    );
  }
);

export default TextInput;
