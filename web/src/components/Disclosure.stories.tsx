import {expect} from '@storybook/jest';
import {userEvent, within, waitFor} from '@storybook/testing-library';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Disclosure} from '~/components';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
} as ComponentMeta<typeof Disclosure>;

const Template: ComponentStory<typeof Disclosure> = args => (
  <Disclosure {...args} />
);

export const Open = Template.bind({});

Open.args = {
  open: true,
  title: '¿Qué es el MakerLab?',
  children: `MakerLab es una comunidad tecnológica que une a varias
    personas con la misma pasión de aprender y enseñar.`,
};

export const Closed = Template.bind({});

Closed.args = {
  open: false,
  title: '¿Qué es el MakerLab?',
  children: `MakerLab es una comunidad tecnológica que une a varias
    personas con la misma pasión de aprender y enseñar.`,
};

export const Default = Template.bind({});

Default.args = {
  title: 'Titulo',
  children: `Texto de contenido`,
};

Default.parameters = {
  testRunner: {
    screenshots: {
      disable: true,
    },
  },
};

Default.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);

  expect(canvas.queryByText(args.children)).not.toBeVisible();

  await waitFor(async () => {
    await userEvent.click(canvas.getByRole('button'));
    expect(await canvas.getByText(args.children)).toBeVisible();
  });

  await userEvent.click(canvas.getByRole('button'));

  await waitFor(async () =>
    expect(canvas.queryByText(args.children)).not.toBeVisible(),
  );
};
