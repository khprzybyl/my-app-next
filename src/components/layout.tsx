import Footer from "./footer";
import Header from "./header";
import { Props } from "../../types";

export const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

