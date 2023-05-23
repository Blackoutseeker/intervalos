import type { FC } from 'react'
import Slide from '../Slide'

const Slide2: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <p
            className="text-xl font-bold text-justify dark:text-white
            md:text-left md:text-3xl md:m-10"
          >
            A estimativa por intervalo de confiança é uma técnica estatística
            usada para inferir informações sobre uma população com base em uma
            amostra.
          </p>
          <p
            className="text-xl font-bold text-justify dark:text-white
            md:text-left md:text-3xl md:m-10"
          >
            Ela fornece um intervalo de valores no qual o valor real do
            parâmetro populacional provavelmente está contido, com um nível de
            confiança específico.
          </p>
        </div>
      </Slide>
    </>
  )
}

export default Slide2
