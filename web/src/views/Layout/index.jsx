import Navbar from './Navbar';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div className="flex flex-col h-screen bg-[#171717]">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
