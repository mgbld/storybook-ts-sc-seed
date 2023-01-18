import React from 'react';

type ButtonProps = {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

export default ButtonProps;
