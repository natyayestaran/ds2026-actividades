import { ReactNode } from 'react'
import NavbarComponent from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavbarComponent />
      {children}
      <Footer />
    </>
  )
}

export default Layout