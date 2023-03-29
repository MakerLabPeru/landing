import {HTMLProps} from 'react';

type ExternalLinkProps = {} & HTMLProps<HTMLAnchorElement>;

/** A glorified anchor tag */
export const ExternalLink = ({href, children, ...rest}: ExternalLinkProps) => (
  <a target="_blank" rel="noopener" role="button" {...{...rest, href}}>
    {children}
  </a>
);
