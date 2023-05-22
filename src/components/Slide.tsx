import type { FC, ReactNode } from 'react'

interface SlideProps {
  children: ReactNode | ReactNode[]
}

const Slide: FC<SlideProps> = ({ children }) => {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center min-w-full
      px-4 md:snap-start md:scroll-mt-[68px]"
    >
      {children}
    </section>
  )
}

export default Slide
