import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'A modern portfolio built with Next.js',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-logo">My Portfolio</h1>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2025 Shanelle. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}