import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import './App.css'
import Themes from '@/components/themes/Themes'

export const metadata = {
  title: 'portfolio',
  description: 'Nextjs 13 frontend developer 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <Themes />
        {children}
        </body>
    </html>
  )
}
