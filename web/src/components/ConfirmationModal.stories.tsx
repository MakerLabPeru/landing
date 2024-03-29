import {ComponentStory, ComponentMeta} from '@storybook/react';
import ConfirmationModal from './ConfirmationModal';

export default {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
  parameters: {
    docs: {
      story: {
        inline: false,
      },
    },
  },
} as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = args => (
  <ConfirmationModal {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  content: 'Lorem ipsum dolor sit amet.',
};

Default.parameters = {
  docs: {
    story: {
      iframeHeight: 300,
    },
  },
};
