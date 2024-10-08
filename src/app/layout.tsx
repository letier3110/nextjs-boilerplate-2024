import type { Metadata } from 'next'

import type { PropsWithChildren } from 'react'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Poppins, Raleway } from 'next/font/google'

import { ThemeProvider } from '@/components/common/providers'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'
import '@/styles/theme.css'
import '@/styles/shadow.css'
import { COMPANY } from '@/lib/constants'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--heading-font'
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--body-font',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: COMPANY,
  description: 'Description'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn(raleway.variable, poppins.variable)}>
        <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
          <div className='relative flex min-h-screen flex-col'>{children}</div>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
