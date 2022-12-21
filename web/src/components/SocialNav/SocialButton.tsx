import {HTMLProps} from 'react';
import {IconType} from 'react-icons';

type SocialButtonProps = {
  href: string;
  icon: IconType;
} & HTMLProps<HTMLAnchorElement>;

export const SocialButton = ({
  href,
  icon: Icon,
  ...rest
}: SocialButtonProps) => (
  <a className="hover:bg-black/10" target="_blank" rel="noopener" role="button" {...{...rest, href}}>
    <Icon className="mx-4 my-3" size={21} />
  </a>
);
