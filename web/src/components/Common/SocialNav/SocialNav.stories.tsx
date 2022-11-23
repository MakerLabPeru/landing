import {ComponentStory, ComponentMeta} from '@storybook/react';

import SocialNav from './SocialNav';

export default {
  title: 'Components/SocialNav',
  component: SocialNav,
} as ComponentMeta<typeof SocialNav>;

const Template: ComponentStory<typeof SocialNav> = () => (
  <SocialNav />
);

export const Default = Template.bind({});
