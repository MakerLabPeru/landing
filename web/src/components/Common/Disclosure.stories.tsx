import {Disclosure} from '~/components';
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
} as ComponentMeta<typeof Disclosure>;

const Template: ComponentStory<typeof Disclosure> = args => (
  <Disclosure {...args} />
);

export const Open = Template.bind({});

Open.args = {
  open: false,
  title: '¿Qué es el MakerLab?',
  children: `MakerLab es una comunidad tecnológica que une a varias
    personas con la misma pasión de aprender y enseñar.`,
};


export const Closed = Template.bind({});

Closed.args = {
  open: true,
  title: '¿Qué es el MakerLab?',
  children: `MakerLab es una comunidad tecnológica que une a varias
    personas con la misma pasión de aprender y enseñar.`,
}
