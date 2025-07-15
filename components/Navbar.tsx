'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar({
  theme,
  setTheme,
}: {
  theme: 'dark' | 'light'
  setTheme: (t: 'dark' | 'light') => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <nav className="mb-6 flex justify-between items-center relative border-b border-zinc-700 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-zinc-300">
      <div className="text-xl font-bold cursor-pointer">
        <Link href="/">EvolveSteds</Link>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-lg">
        <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link>
        <Link href="/about" className="hover:text-black dark:hover:text-white">About</Link>
        <Link href="/products" className="hover:text-black dark:hover:text-white">Products</Link>
        <Link href="/faq" className="hover:text-black dark:hover:text-white">FAQ</Link>
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-2 rounded-md bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white transition hover:cursor-pointer"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <button
        className="md:hidden p-2 rounded-md bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖️' : '☰'}
      </button>

      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-zinc-900 border-t border-zinc-700 shadow-md z-50">
          <div className="flex flex-col px-6 py-4 space-y-4 text-lg">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <button
              onClick={() => {
                toggleTheme()
                setMenuOpen(false)
              }}
              className="p-2 rounded bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white w-fit"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
