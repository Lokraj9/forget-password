
import Provider from '@/context/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Global/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <Provider>
       
        {children}
      
      </Provider>
      
       
      </body>
    </html>
  )
}
