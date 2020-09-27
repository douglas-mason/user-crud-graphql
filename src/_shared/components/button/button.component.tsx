import React from 'react';
import './button.styles.scss';

interface Props {
  text: string;
  disabled?: boolean;
  inverted?: boolean;
  type?: 'primary' | 'danger';
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ onClick = () => {}, text, disabled, inverted, type }) => {
  const generateClass = () => {
    let className = 'button';
    if (inverted) {
      className += ' inverted';
    }
    switch (type) {
      case 'primary':
        className += ' primary';
        break;
      case 'danger':
        className += ' danger';
        break;
    }
    return className;
  };
  return (
    <button className={generateClass()} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
