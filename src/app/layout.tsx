import './globals.css'
import { Saira } from 'next/font/google'
import { ReactNode } from 'react'
import Providers from '@/redux/services/provider'
import HeaderComponent from '@/components/header'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Providers>
          <HeaderComponent />
          {children}
        </Providers>
      </body>
    </html>
  )
}
