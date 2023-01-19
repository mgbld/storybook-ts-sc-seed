import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledButton = styled.button<{
  primary: boolean;
  large: boolean;
  withIcon: boolean;
  round: boolean;
}>(
  ({
    primary,
    large,
    withIcon,
    round,
    theme: { color, boxShadow, borderRadius },
  }) => css`
    outline: none;
    border: 0;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-radius: ${round ? borderRadius.xl : borderRadius.xs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: ${withIcon ? '0.7rem' : large ? '1.125rem' : '0.874rem'};
    color: ${primary ? color.primaryText : color.buttonText};

    transition: box-shadow 150ms ease-in;
    z-index: 1;
    background-color: ${primary ? color.buttonPrimary : color.buttonSecondary};

    &:hover {
      cursor: pointer;
      background-color: ${primary
        ? color.buttonPrimaryHover
        : color.buttonSecondaryHover};
    }

    &:focus {
      box-shadow: ${boxShadow.outerBorder};
    }

    &:disabled {
      background-color: ${primary
        ? color.buttonPrimary
        : color.buttonSecondary};
      opacity: 0.4;
      cursor: default;
    }

    @media ${breakpoints.M} {
      padding: ${withIcon
        ? '1rem'
        : large
        ? '1.125rem 1.5rem'
        : '0.875rem 1.5rem'};
    }
  `
);

export default StyledButton;
