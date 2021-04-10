import React from 'react';

export type Options = {
  label: string;
  value: string | number;
};

export interface SelectInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  options: Array<Options>;
  id?: string;
  name?: string;
}

const SelectInput = React.forwardRef(
  (props: SelectInputProps, ref: React.LegacyRef<HTMLSelectElement>) => {
    const { label, id = '', options } = props;

    return (
      <label className="block">
        <span>{label}</span>
        <select ref={ref} id={id} {...props}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  }
);

export default SelectInput;
