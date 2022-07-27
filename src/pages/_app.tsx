import { ReactElement } from "react";
import "tailwindcss/tailwind.css";
// TODO: rewire translation later
//import { appWithTranslation } from 'next-i18next';
import { AppPropsWithLayout } from "../../types";
import { Layout } from "../components/layout";

const renderRegularLayout = ((children: ReactElement) => (
  <Layout>
    {children}
  </Layout>)
  )

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? renderRegularLayout;

  return getLayout(
  <Component {...pageProps} />
  )
}
export default MyApp;
