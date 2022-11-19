import {Disclosure} from '~/components';
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
} as ComponentMeta<typeof Disclosure>;

const Template: ComponentStory<typeof Disclosure> = args => (
  <Disclosure {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: '¿Qué es el MakerLab?',
  children: `MakerLab es una comunidad tecnológica que une a varias
    personas con la misma pasión de aprender y enseñar.`,
};
