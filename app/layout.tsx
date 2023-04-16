import './globals.css'
import Header from './header'
import { Inter } from 'next/font/google'
import Footer from './footer';
import { Analytics } from '@vercel/analytics/react';

const DESCRIPTION = "I'm a fullstack developer focused on creating seamless experiences that exceed user expectations. With expertise in design and development, I thrive on solving complex challenges and delivering high-quality products.";
const TITLE = "Ali Hussnain | Full Stack Developer"

export const metadata = {
  title: TITLE,
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
    "Typescript",
    "Java script",
    "Type script",
    "Bootstrap",
    "Tailwind",
    "Tailwind CSS",
    "HTML",
    "Web Development",
    "Ali Hussnain",
    "Web Developer",
    "Android Developer",
    "Mobile Developer",
    "Flutter",
    "Software Engineer"
  ],
  publisher: "Ali Hussnain",
  twitter: {
    creator: "Ali Hussnain",
    title: TITLE,
    description: DESCRIPTION,
    images: {
      url: "https://www.alihussnainrb.com/images/about-img.jpg"
    },
    card: "summary_large_image",
  },
  openGraph: {
    title: TITLE,
    images: {
      url: "https://www.alihussnainrb.com/images/about-img.jpg"
    },
    description: DESCRIPTION,
    type: "website"
  },
  formatDetection: {
    address: false,
    date: true,
    email: true,
    telephone: true,
    url: true
  },
  archives: "https://www.alihussnainrb.com/projects"
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
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
