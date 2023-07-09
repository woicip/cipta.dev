import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'
import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'

// components
import Loader from '@/components/Loader'
import Navigation from '@/components/Navigation/Navigation'
import MobileNavigation from '@/components/Navigation/MobileNavigation'


export default function App({ Component, pageProps }: AppProps) {
  const [ queryClient ] = React.useState(() => new QueryClient())
  const [ openMenu, setOpenMenu ] = React.useState(false)
  const [ loader, setLoader ] = React.useState(true)

  const containerStyle = classNames(`w-full`)

  React.useEffect(() => {
    if(openMenu){
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = 'auto'
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
          {
            loader ? 
            <Loader setLoader={setLoader} />
            :
            <AnimatePresence>
              <div className={containerStyle}>
                {
                  openMenu ? 
                    <>
                      <div className="bg-black/30 w-full h-screen fixed top-0 z-20 hidden tabletM:block transition-all"></div>
                      <MobileNavigation setOpenMenu={setOpenMenu} />
                    </>
                    :
                    null
                }

                <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
                <Component {...pageProps} />
              </div>
          </AnimatePresence>
          }
      </Hydrate>
    </QueryClientProvider>
  )
}
