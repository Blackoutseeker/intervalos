import type { FC } from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Header: FC = () => {
  return (
    <header
      className="sticky flex top-0 items-center p-4 space-x-6
      shadow-md dark:shadow-none bg-[#d3d3d3] dark:bg-[#121212] z-10"
    >
      <div className="hidden md:flex">
        <h1 className="text-xl font-bold ml-4 dark:text-white">
          Estimação por intervalos
        </h1>
      </div>
      <div className="flex flex-1" />
      <Link
        className="rounded-full flex justify-center items-center p-2
        hover:cursor-pointer bg-blue-500/20 dark:bg-white/20"
        href={process.env.SOURCE_CODE_URL}
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="fill-black dark:fill-white" size={20} />
      </Link>
    </header>
  )
}

export default Header
