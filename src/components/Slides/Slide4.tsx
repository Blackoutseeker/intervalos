import type { FC } from 'react'
import Slide from '../Slide'

const Slide4: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center dark:text-white underline md:text-left md:text-3xl m-4">
            Estimativa para médias
          </h2>
          <p className="text-lg font-bold text-justify dark:text-white md:text-left md:text-3xl md:m-10">
            Ao estimar a média de uma população, podemos calcular um intervalo
            de confiança utilizando a média da amostra, o desvio padrão amostral
            e o tamanho da amostra.
            <br />
            Esse intervalo nos fornece uma faixa de valores prováveis para a
            média populacional com um determinado nível de confiança.
          </p>
        </div>
      </Slide>
    </>
  )
}

export default Slide4
