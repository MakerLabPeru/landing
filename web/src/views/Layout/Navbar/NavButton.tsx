import {useRouter, ComponentProps} from 'next/router';

import {NavItem} from './NavItem';

type NavButtonProps = {
  label: string;
  children: ReactNode;
} & ComponentProps<NavItem>;

export const NavButton = ({label, href, ...rest}: NavButtonProps) => {
  const {pathname} = useRouter();

  return <NavItem {...{...rest, href, active: pathname === href}}>{label}</NavItem>;
};
