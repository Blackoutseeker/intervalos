import type { FC } from 'react'
import Slide from '../Slide'
import { QRCodeSVG } from 'qrcode.react'

const Slide1: FC = () => {
  return (
    <>
      <Slide>
        <h2
          className="text-3xl font-bold py-6 flex flex-1 items-center
          text-center md:flex-none dark:text-white"
        >
          Estimação por intervalo. Intervalos de confiança para médias e
          proporções.
        </h2>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <div className="hidden md:flex flex-col items-center rounded-md p-4 space-y-4 bg-white">
            <p className="text-2xl font-bold">{process.env.SITE_URL}</p>
            <QRCodeSVG value={process.env.SITE_URL} size={310} />
          </div>
        </div>
        <h2 className="text-xl font-bold dark:text-white py-6 md:w-4/5">
          Por: {process.env.AUTHOR}
        </h2>
      </Slide>
    </>
  )
}

export default Slide1
