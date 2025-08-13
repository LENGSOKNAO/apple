import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
