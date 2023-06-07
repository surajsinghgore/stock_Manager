"use client";
import Header from './components/Header';
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ['latin'] })

// global meta tag for website
export const metadata = {
icons: {
    icon: '/icon.png',
  },
 title: 'Stock Manager',
  description: 'This website helps to note stocks of companies and analysis trading ',
  generator: 'Next.js',
  applicationName: 'stock market',
  referrer: 'origin-when-cross-origin',
  keywords: ['stock market', 'stock market trading note', 'analysis trading'],
  authors: [{ name: 'suraj singh' }, { name: 'suraj singh', url: 'https://www.linkedin.com/in/surajsinghgore' }],
  colorScheme: 'dark',
  creator: 'suraj singh',
  publisher: 'suraj singh', 

};



export default function RootLayout({ children,
  ...props }) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
      



       <SessionProvider session={props.session}>
       
      <Header />
       {children}
       
       </SessionProvider>
  
      </body>
    </html>
  )
}
