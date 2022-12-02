import Button from '~/components/Button';
import Logo from './Logo';
import Options from './Options';

function Navbar() {
  return (
    <nav className="px-2 py-2.5 bg-gray-800">
      <div className="flex container flex-wrap justify-between items-center mx-auto">
        <Logo />
        <Options />
        <Button>Postular ahora</Button>
      </div>
    </nav>
  );
}

export default Navbar;
