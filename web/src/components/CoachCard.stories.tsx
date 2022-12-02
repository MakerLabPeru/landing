import {ComponentStory, ComponentMeta} from '@storybook/react';
import CoachCard from './CoachCard';

export default {
  title: 'Components/CoachCard',
  component: CoachCard,
} as ComponentMeta<typeof CoachCard>;

const Template: ComponentStory<typeof CoachCard> = args => (
  <CoachCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  img: 'https://placekitten.com/200/200',
  name: 'Aurelio Denegri',
  title: 'Coach frontend',
};
