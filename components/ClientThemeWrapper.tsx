'use client'

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen p-6 transition-colors bg-white text-black dark:bg-zinc-900 dark:text-zinc-300">
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
    </div>
  );
}
