import clsx from 'clsx';
import {useCallback, forwardRef, useRef, ReactNode, ComponentProps} from 'react';
import {useRouter} from 'next/router';
import useSize from '@react-hook/size';
import {ToggleButton} from '@accessible/toggle-button';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {Popover, Target, Trigger} from '@accessible/popover';
import ClickAwayListener from 'react-click-away-listener';

import {useBit} from '~/hooks';
import {NavItem} from './NavItem';
import {useNavContext, NavContextProvider} from './NavContext';

type NavSectionProps = {
  label: string;
  subpath: string;
  children: ReactNode;
};

type IsOpenProps = {
  isOpen: boolean;
};

const OpenArrow = ({isOpen}: IsOpenProps) => (
  <MdKeyboardArrowUp
    className={clsx(
      'transition-transform text-xl',
      isOpen ? 'rotate-0' : 'rotate-180',
      'md:rotate-180',
    )}
  />
);

type NavSectionHeaderProps = {
  label: string;
  subpath: string;
} & IsOpenProps &
  ComponentProps<typeof NavItem>;

const NavSectionHeader = forwardRef<HTMLAnchorElement, NavSectionHeaderProps>(
  ({className, subpath, label, isOpen, ...rest}, ref) => {
    const {pathname} = useRouter();

    return (
      <NavItem
        {...rest}
        className={clsx('gap-2', className)}
        active={pathname.startsWith(subpath)}
        {...{ref}}
      >
        <span>{label}</span> <OpenArrow {...{isOpen}} />
      </NavItem>
    );
  },
);

type NavSectionContentMobile = {
  children: ReactNode;
} & IsOpenProps;

const NavSectionContentMobile = ({
  children,
  isOpen,
}: NavSectionContentMobile) => {
  const ref = useRef();
  const [_, height] = useSize(ref);
  return (
    <div
      className="md:hidden overflow-hidden bg-neutral-800 transition-[height] duration-300"
      style={{height: isOpen ? height : 0}}
    >
      <div className="ml-4" {...{ref}}>
        {children}
      </div>
    </div>
  );
};

export const NavSectionMobile = ({
  label,
  subpath,
  children,
}: NavSectionProps) => {
  const [isOpen, setOpen] = useBit(false);

  return (
    <div>
      <ToggleButton active={isOpen} onChange={setOpen} {...{label}}>
        <NavSectionHeader className="md:hidden" {...{isOpen, subpath, label}} />
      </ToggleButton>
      <NavSectionContentMobile {...{isOpen}}>
        <NavContextProvider isSection>{children}</NavContextProvider>
      </NavSectionContentMobile>
    </div>
  );
};

export const NavSectionNonMobile = ({
  subpath,
  label,
  children,
}: NavSectionProps) => {
  const [isOpen, setOpen] = useBit(false);

  const onClickAway = useCallback(
    event => {
      if (event.type === 'focusin') {
        return;
      }

      setOpen.unset();
    },
    [setOpen],
  );

  return (
    <ClickAwayListener {...{onClickAway}}>
      <span className="hidden md:block">
        <Popover repositionOnResize open={isOpen} onChange={setOpen.toggle}>
          <Trigger on="click">
            <NavSectionHeader {...{isOpen, subpath, label}} />
          </Trigger>

          <Target>
            <div className="flex flex-col bg-neutral-800">
              <NavContextProvider isSection>{children}</NavContextProvider>
            </div>
          </Target>
        </Popover>
      </span>
    </ClickAwayListener>
  );
};

export const NavSection = (props: NavSectionProps) => {
  const {isMobile} = useNavContext();

  const Component = isMobile ? NavSectionMobile : NavSectionNonMobile;

  return <Component {...props} />;
};
