import {ReactNode} from 'react';
import {Navbar} from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({children}: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="grow">{children}</div>
    <Footer />
  </div>
);

export default Layout;
