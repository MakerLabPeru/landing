import {ComponentProps} from 'react';
import {useRouter} from 'next/router';

import {NavItem} from './NavItem';

type NavButtonProps = {
  label: string;
} & ComponentProps<typeof NavItem>;

export const NavButton = ({label, href, ...rest}: NavButtonProps) => {
  const {pathname} = useRouter();

  return <NavItem {...{...rest, href, active: pathname === href}}>{label}</NavItem>;
};
