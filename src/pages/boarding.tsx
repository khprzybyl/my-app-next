import { NextPage } from "next";
import Footer from "../components/Footer.tsx";

const Boarding: NextPage = () => {
  return (
    <div className="container mx-auto my-6">
      <h1>Boarding Page</h1>
    </div>
  );
};

export default Boarding;

Boarding.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
