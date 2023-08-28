import '@/assets/stylesheet/globals.css';
import 'animate.css';
import "flatpickr/dist/themes/material_green.css";
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  )
}
