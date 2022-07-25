import Header from "./header";
import { Props } from "../../types";

export const NestedLayout = ({ children }: Props) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default NestedLayout;
