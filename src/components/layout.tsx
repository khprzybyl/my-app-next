import Footer from "./footer-primary";
import Header from "./header-primary";
import { Props } from "../../types";

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
