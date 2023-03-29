import {ReactNode} from 'react';
import {Button} from '~/components';

import {NavButton} from './NavButton';
import {NavSection} from './NavSection';
import {NavbarContent} from './NavbarContent';
import {Logo} from '../Logo';

const NavbarBase = ({children}: {children: ReactNode}) => (
  <div className="bg-neutral-900 z-50">
    <div className="flex justify-between items-center bg-neutral-900 h-14 px-2">
      {children}
    </div>
  </div>
);

export const Navbar = () => (
  <NavbarBase>
    <Logo className="block ml-3" />

    <NavbarContent>
      <NavButton href="/" label="Inicio" />
      <NavSection subpath="/about" label="Nosotros">
        <NavButton href="/about/community" label="Comunidad" />
        <NavButton href="/about/rules" label="Reglamento" />
      </NavSection>
      <NavButton href="/hackathons" label="Hackathons" />
      <NavButton href="/faq" label="FAQ" />

      <Button className="ml-6 self-start" href="/apply">
        Postular
      </Button>
    </NavbarContent>
  </NavbarBase>
);
