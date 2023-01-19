import React from 'react';

import StyledButton from './Button.style';
import ButtonProps from './Button.types';

export const Button: React.FC<
  ButtonProps & React.ComponentProps<typeof StyledButton>
> = ({
  children,
  large = false,
  primary = true,
  round = false,
  // icon,
  // iconSize,
  ...props
}) => {
  return (
    <StyledButton
      type='button'
      large={large}
      primary={primary}
      round={round}
      // widthIcon={!!icon}
      {...props}>
      {children}
    </StyledButton>
  );
};
