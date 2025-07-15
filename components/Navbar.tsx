'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <nav className="mb-6 px-4 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">EvolveSteds</Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/products">Products</Link>
        <button
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white dark:bg-zinc-900 text-black dark:text-white border-t border-gray-200 dark:border-gray-700 flex flex-col items-start px-6 py-4 md:hidden z-50 shadow-md">
          <Link href="/" className="mb-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="mb-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/faq" className="mb-2" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/products" className="mb-4" onClick={() => setMenuOpen(false)}>Products</Link>
          <button
            onClick={() => {
              setDarkMode(!darkMode)
              setMenuOpen(false)
            }}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-full text-left"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  )
}
