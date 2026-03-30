'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useHydrated } from '@/hooks/useHydrated'

export function PageWrapper({ children }: { children: ReactNode }) {
  const hydrated = useHydrated()
  return (
    <motion.div
      initial={hydrated ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
