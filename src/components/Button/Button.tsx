import React from 'react';

import StyledButton from './Button.style';
import ButtonProps from './Button.types';

export const Button: React.FC<
  ButtonProps & React.ComponentProps<typeof StyledButton>
> = ({ primary = false, size = 'medium', label, ...props }) => {
  return (
    <StyledButton primary={primary} size={size} {...props}>
      {label}
    </StyledButton>
  );
};
