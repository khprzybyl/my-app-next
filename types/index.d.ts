import type { ReactElement, ReactNode } from 'react'
//jak działa extend interfejsu lub typu
// czym są moduły w ts
//stowrzyc nowy typ jak napisali w dokumentacji 
//zaimportować go w komponencie i zobaczyć czy działą

import { NextPage } from 'next'

interface NextPageWithLayout extends NextPage {
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}
type AppPropsWithLayout = AppProps & {
  Component : NextPageWithLayout
}
type Props = {
  children?: React.ReactNode;
};
