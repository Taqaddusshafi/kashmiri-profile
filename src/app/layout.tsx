import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'

export const metadata: Metadata = {
  title: 'Taqaddus Shafi - Full Stack Developer & Cybersecurity Expert | Kashmir',
  description: 'Taqaddus Shafi - Versatile developer specializing in Full Stack Development, Mobile Apps, and Cybersecurity from Srinagar, Kashmir. Expert in React, Node.js, Python, and penetration testing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
