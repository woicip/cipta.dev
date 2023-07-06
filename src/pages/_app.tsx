import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'

// components
import Navigation from '@/components/Navigation/Navigation'


export default function App({ Component, pageProps }: AppProps) {
  const [ queryClient ] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div>
          <Navigation />
          <Component {...pageProps} />
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}
