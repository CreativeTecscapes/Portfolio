import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar1 from './Components/Navbar1'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Creative Techscapes',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-y-scroll no-scrollbar'>
      <body className={inter.className}>
         {/* <Navbar1 /> */}
        {children}
      </body>
    </html>
  )
}

