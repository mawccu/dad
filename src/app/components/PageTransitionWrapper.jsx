'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import PageTransition from './PageTransition'

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <PageTransition>
      {children}
    </PageTransition>
  )
}
