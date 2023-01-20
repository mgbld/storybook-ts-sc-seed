import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../src/styles/theme';

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
  console.log(storyTheme);
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      {StoryFn()}
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
