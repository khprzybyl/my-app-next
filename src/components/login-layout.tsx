import Footer from ".//footer-primary";
import { Props } from "../../types";

export const LoginLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default LoginLayout;
