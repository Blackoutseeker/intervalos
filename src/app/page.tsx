import type { NextPage } from 'next'
import Header from '@src/components/Header'
import Slide1 from '@src/components/Slides/Slide1'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Slide1 />
      </main>
    </>
  )
}

export default Home
