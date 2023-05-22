'use client'

import { FC, useState, useEffect } from 'react'
import { FaMoon } from 'react-icons/fa'

type Theme = 'light' | 'dark'

const ThemeButton: FC = () => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className="rounded-full flex justify-center items-center p-2
      cursor-pointer bg-blue-500/20 dark:bg-white/20"
      onClick={switchTheme}
    >
      <FaMoon className="fill-black dark:fill-white" size={20} />
    </button>
  )
}

export default ThemeButton
