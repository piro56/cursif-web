import './globals.css'

import { ApolloWrapper } from "./graphql/apollo-wrapper";
import { DarkModeProvider } from './dark-mode-context';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cursif',
  description: 'Taking note should be fast and simple!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <html lang="en">
        <DarkModeProvider>
          <body className={inter.className}>
            {children}
          </body>
        </DarkModeProvider>
      </html>
    </ApolloWrapper>
  )
}
