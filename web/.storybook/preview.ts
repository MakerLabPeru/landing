import '~/styles/globals.css';

import type {Preview} from '@storybook/nextjs';

export const previewConfig: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        xxs: {
          name: 'Mobile - Small',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        xs: {
          name: 'Mobile - Large',
          styles: {
            width: '480px',
            height: '920px',
          },
        },
        sm: {
          name: 'Tablet - Small',
          styles: {
            width: '640px',
            height: '1100px',
          },
        },
        md: {
          name: 'Tablet - Large',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        lg: {
          name: 'Tablet - Landscape',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        xl: {
          name: 'Laptop - Small',
          styles: {
            width: '1280px',
            height: '850px',
          },
        },
        '2xl': {
          name: 'Desktop - FHD',
          styles: {
            width: '1536px',
            height: '780px',
          },
        },
        '3xl': {
          name: 'Desktop - QHD',
          styles: {
            width: '2048px',
            height: '1040px',
          },
        },
      },
    },
    testRunner: {
      defaultViewport: 'xs',
      screenshots: {
        disable: false,
        viewports: ['xxs'],
      },
    }
  },
};

export default previewConfig;
