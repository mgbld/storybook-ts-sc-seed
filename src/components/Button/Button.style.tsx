import styled, { css } from 'styled-components';

const StyledButton = styled.button<{
  primary: boolean;
  size: string;
}>(
  ({ primary, size }) => css`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3rem;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    ${primary && primary
      ? `color: white; 
        background-color: #1ea7fd; `
      : `color #333; 
          background-color: white; 
          box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;`};

    ${size && size === 'small'
      ? `font-size: 12px; 
          padding: 10px 16px`
      : size === 'medium'
      ? `font-size: 14px; 
          padding: 11px 20px`
      : `font-size: 16px; 
          padding: 12px 24px;`};
  `
);

export default StyledButton;
