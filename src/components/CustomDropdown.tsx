// CustomDropdown.tsx
import React from 'react';

const styles = {
  dropdown: {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    // Use your own colors and fonts as needed to match the design
  },
};

interface CustomDropdownProps {
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onChange, value, name }) => {
  return (
    <select style={styles.dropdown} onChange={onChange} value={value} name={name}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomDropdown;
