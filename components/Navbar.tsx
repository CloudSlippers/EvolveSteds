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
    <nav className="mb-6 flex justify-between items-center relative border-b border-gray-300 dark:border-zinc-700">
      {/* Logo on the left */}
      <div className="text-xl font-bold cursor-pointer">
        <Link href="/">
          <span>EvolveSteds</span>
        </Link>
      </div>

      {/* Desktop links + toggle */}
      <div className="hidden md:flex items-center space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>

        {/* Dark/Light toggle */}
        <button
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? '✖️' : '☰'}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-zinc-900 border-t border-gray-300 dark:border-zinc-700 shadow-md z-50">
          <div className="flex flex-col px-6 py-4 space-y-4 text-lg">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 dark:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 dark:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 dark:text-gray-300"
            >
              FAQ
            </Link>

            <button
              aria-label="Toggle dark mode"
              onClick={() => {
                setDarkMode(!darkMode)
                setMenuOpen(false)
              }}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition w-fit"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
