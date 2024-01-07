import './globals.css'

export const metadata = {
  title: 'portfolio',
  description: 'Nextjs 13 frontend developer 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
