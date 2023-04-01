import clsx from 'clsx';
import {useEffect, ReactNode} from 'react';
import {useRouter} from 'next/router';
import useMeasure from 'react-use-measure';
import {animated, useSpring} from '@react-spring/web';
import Hamburger from 'hamburger-react';
import {useBit} from '~/hooks';
import {NavContextProvider} from './NavContext';

type MobileNavContentContainerProps = {
  children: ReactNode;
};

const useMenuOpenState = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useBit(false);

  useEffect(() => {
    router.events.on('routeChangeStart', setOpen.unset);

    return () => router.events.off('routeChangeStart', setOpen.unset);
  }, [router, setOpen]);

  return [isOpen, setOpen] as ReturnType<typeof useBit>;
};

const useMenuSpring = (isOpen: boolean) => {
  const [ref, {height}] = useMeasure();
  const mobileSpring = useSpring({
    top: isOpen ? 0 : -height || -1000,
  });

  return [ref, mobileSpring] as [typeof ref, typeof mobileSpring];
};

const MobileNavbarContent = ({children}: MobileNavContentContainerProps) => {
  const [isOpen, setOpen] = useMenuOpenState();
  const [ref, menuSpring] = useMenuSpring(isOpen);

  return (
    <>
      <div className="md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          distance="lg"
          label="Mostrar menu"
          color="white"
        />
      </div>

      <animated.nav
        className={clsx([
          'md:hidden self-end flex fixed flex-col w-screen bg-neutral-900',
          'py-4 mt-14 -z-10 left-0 gap-1',
        ])}
        ref={ref}
        style={menuSpring}
      >
        {children}
      </animated.nav>
    </>
  );
};

type NavContentProps = {
  children: ReactNode;
};

export const NavbarContent = ({children}: NavContentProps) => (
  <>
    <NavContextProvider isMobile={false}>
      <nav className="hidden md:flex items-center gap-2">{children}</nav>
    </NavContextProvider>

    <NavContextProvider isMobile>
      <MobileNavbarContent>{children}</MobileNavbarContent>
    </NavContextProvider>
  </>
);
