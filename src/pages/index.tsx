import type { NextPage } from 'next'
import Header from '@src/components/Header'
import Slide1 from '@src/components/Slides/Slide1'
import Slide2 from '@src/components/Slides/Slide2'
import Slide3 from '@src/components/Slides/Slide3'
import Slide4 from '@src/components/Slides/Slide4'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </main>
    </>
  )
}

export default Home
