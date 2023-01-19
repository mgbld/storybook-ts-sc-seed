import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    large: false,
    primary: true,
    round: false,
    children: 'Button',
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    forwardedAs: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
};

export const Round = Template.bind({});
Round.args = {
  round: true,
  children: 'Button',
};
