'use client'

import { useState, useEffect } from 'react'

/** Returns false during SSR and first render, true after hydration. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  return hydrated
}
