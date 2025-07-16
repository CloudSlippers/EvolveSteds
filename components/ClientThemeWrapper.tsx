'use client'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import React from "react";

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark'|'light'>('light')

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen p-6 transition-colors bg-white text-black dark:bg-zinc-900 dark:text-zinc-300">
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
    </div>
  )
}
