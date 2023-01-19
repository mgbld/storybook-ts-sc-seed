import React from 'react';

type ButtonProps = {
  primary?: boolean;
  round?: boolean;
  // icon?: string;
  // iconSize?: number;
  disabled?: boolean;
  children: React.ReactNode | string;
  onClick?: () => void;
};

export default ButtonProps;
