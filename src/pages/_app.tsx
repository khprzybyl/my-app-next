
import 'tailwindcss/tailwind.css';
// TODO: rewire translation later
//import { appWithTranslation } from 'next-i18next';
import { AppPropsWithLayout, Props } from '../../types';
import { Layout } from '../components/layout';


import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next/types'


const foo = (page: Props)=>page

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout ?? foo
  return (
    <>
    <Layout>
     {getLayout(<Component {...pageProps} />)}
    </Layout>
    </>
  )
}
export default MyApp
