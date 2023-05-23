import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@src/components/Header'
import Slide1 from '@src/components/Slides/Slide1'
import Slide2 from '@src/components/Slides/Slide2'
import Slide3 from '@src/components/Slides/Slide3'
import Slide4 from '@src/components/Slides/Slide4'
import Slide5 from '@src/components/Slides/Slide5'
import Slide6 from '@src/components/Slides/Slide6'
import Slide7 from '@src/components/Slides/Slide7'
import Slide8 from '@src/components/Slides/Slide8'
import Slide9 from '@src/components/Slides/Slide9'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Estimação por intervalo</title>
        <meta
          name="description"
          content="Estimação por intervalo. Intervalos de confiança para médias e
          proporções."
        />
      </Head>
      <Header />
      <main className="flex flex-col">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
      </main>
    </>
  )
}

export default Home
