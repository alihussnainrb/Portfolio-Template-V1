import './globals.css'
import Header from './header'
import { Inter } from 'next/font/google'
import { Metadata } from 'next';

const DESCRIPTION = "I'm a fullstack fullstack developer focused on creating seamless experiences that exceed user expectations. With expertise in design and development, I thrive on solving complex challenges and delivering high-quality products.";

export const metadata = {
  title: 'Ali Hussnain | Full-Stack Developer',
  description: DESCRIPTION,
  icons: {
    shortcut: "/icons/logo.svg"
  },
  creator: "Ali Hussnain",
  applicationName: "Ali Hussnain's Portfolio",
  keywords: [
    "Web",
    "React",
    "React js",
    "Next",
    "Next.js",
    "Next js",
    "Javascript",
    "Java script",
    "Bootstrap",
    "Tailwind",
    "Tailwind CSS",
    "HTML"
  ],
  publisher: "Ali Hussnain",
  twitter: {
    creator: "Ali Hussnain",
    title: "Ali Hussnain | Full-Stack Developer",
    description: DESCRIPTION,
    images: {
      url: "/images/about-img.jpg"
    },
    card: "summary_large_image",
  },
  openGraph: {
    title: "Ali Hussnain | Full-Stack Developer",
    images: {
      url: "/images/about-img.jpg"
    },
    description: DESCRIPTION
  },
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
