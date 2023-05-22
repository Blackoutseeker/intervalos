'use client'

import { FC, useRef } from 'react'
import { MdOutlineRectangle, MdClose } from 'react-icons/md'

const BlankBoard: FC = () => {
  const modal = useRef<HTMLDialogElement>(null)

  const showModal = () => {
    modal.current?.showModal()
  }

  const closeModal = () => {
    modal.current?.close()
  }

  return (
    <div className="hidden md:flex">
      <button
        onClick={showModal}
        className="rounded-full flex justify-center items-center p-2
        cursor-pointer bg-blue-500/20 dark:bg-white/20"
      >
        <MdOutlineRectangle className="fill-black dark:fill-white" size={20} />
      </button>
      <dialog ref={modal} className="min-w-full min-h-screen">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 rounded-full flex
          justify-center items-center p-2 cursor-pointer bg-blue-500/20"
        >
          <MdClose color="#000" size={20} />
        </button>
      </dialog>
    </div>
  )
}

export default BlankBoard
