import './globals.css'

import { AppKit } from '../context/AppKit'

export const metadata = {
  title: 'AppKit',
  description: 'AppKit Example'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppKit>{children}</AppKit>
      </body>
    </html>
  )
}