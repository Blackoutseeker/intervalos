import type { NextPage } from 'next'
import Header from '@src/components/Header'
import Slide1 from '@src/components/Slides/Slide1'
import Slide2 from '@src/components/Slides/Slide2'
import Slide3 from '@src/components/Slides/Slide3'
import Slide4 from '@src/components/Slides/Slide4'
import Slide5 from '@src/components/Slides/Slide5'
import Slide6 from '@src/components/Slides/Slide6'
import Slide7 from '@src/components/Slides/Slide7'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
      </main>
    </>
  )
}

export default Home
