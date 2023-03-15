import './globals.css'
import Header from './header'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Ali Hussnain',
  description: '',
}


const inter = Inter({
  weight: "variable",
  subsets: ['latin'],
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
