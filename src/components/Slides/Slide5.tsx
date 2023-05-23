import type { FC } from 'react'
import Slide from '../Slide'

const Slide5: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center dark:text-white underline md:text-left md:text-3xl m-4">
            Estimativa para proporções
          </h2>
          <p className="text-lg font-bold text-justify dark:text-white md:text-left md:text-3xl md:m-10">
            Já a estimativa por intervalo de confiança para proporções é
            utilizada quando queremos inferir sobre a proporção de uma
            característica em uma população.
            <br />
            Nesse caso, o intervalo de confiança é calculado usando a proporção
            da amostra, o tamanho da amostra e a distribuição binomial.
          </p>
        </div>
      </Slide>
    </>
  )
}

export default Slide5
