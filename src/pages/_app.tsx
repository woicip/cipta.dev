import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'
import classNames from 'classnames'
import useDiscussStore from '@/store/useDiscussStore'

// components
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation/Navigation'
import MobileNavigation from '@/components/Navigation/MobileNavigation'
import DiscussProject from '@/components/Projects/DiscussProject'

export default function App({ Component, pageProps }: AppProps) {

  const [ queryClient ] = React.useState(() => new QueryClient())

  const [ openMenu, setOpenMenu ] = React.useState(false)
  const [ loader, setLoader ] = React.useState(true)
  const [ openDiscuss, setOpenDiscuss ] = React.useState(false);

  const containerStyle = classNames(`w-full`)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
          { loader ? 
            <Loader setLoader={setLoader} />
            :
            <div className={containerStyle}>
              <DiscussProject openDiscuss={openDiscuss} setOpenDiscuss={setOpenDiscuss} />
              <MobileNavigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Component {...pageProps} />
            </div>
          }
      </Hydrate>
    </QueryClientProvider>
  )
}
