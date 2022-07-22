import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {

if(Component.getLayout){
  return Component.getLayout(<Component {...pageProps}/>)
}

  return (
  <>
  <Header />
  <Component {...pageProps} />
  <Footer /> 
  </>);
}

export default appWithTranslation(MyApp);
