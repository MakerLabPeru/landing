import {Navbar} from './Navbar';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
