import {omit} from 'ramda';
import {ComponentProps} from 'react';
import NextLink from 'next/link';

import {ExternalLink} from './ExternalLink';

type LinkProps = ComponentProps<NextLink>;

const isExternalUrl = (url: string) => url?.match(/^https?:\/\//) ?? false;

export const Link = (props: LinkProps) => {
  const {href} = props;
  const isExternal = isExternalUrl(href);

  if (isExternal) {
    const anchorProps = omit(
      [
        'as',
        'legacyBehavior',
        'passHref',
        'prefetch',
        'replace',
        'scroll',
        'shallow',
        'locale',
      ],
      props,
    );
    return <ExternalLink {...anchorProps} />;
  }

  return <NextLink {...props} />;
};
