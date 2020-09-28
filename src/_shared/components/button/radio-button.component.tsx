import React from 'react';

interface RadioButtonProps {
  isChecked: (value: string) => boolean;
  onChange: (value: string) => void;
  groupName: string;
  value: string;
  label: string;
}
export const RadioButton: React.FC<RadioButtonProps> = ({
  onChange,
  isChecked,
  groupName,
  value,
  label,
}) => {
  return (
    <label>
      <input
        onChange={(e) => onChange(e.currentTarget.value)}
        checked={isChecked(value)}
        name={groupName}
        type="radio"
        value={value}
      ></input>
      {label}
    </label>
  );
};
