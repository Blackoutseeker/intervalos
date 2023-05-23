import type { FC } from 'react'
import Slide from '../Slide'

const Slide8: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <p className="text-lg font-bold text-justify dark:text-white md:text-left md:text-3xl md:m-10">
            Um exemplo de aplicação da estimação por intervalo de confiança para
            proporções é em pesquisas de mercado para avaliar a proporção de
            consumidores que preferem um determinado produto em relação a outro.
            <br />
            Uma amostra de consumidores é coletada, e a proporção de preferência
            é calculada. Com base nisso, um intervalo de confiança é construído
            para estimar a proporção populacional de preferência com um
            determinado nível de confiança.
          </p>
        </div>
      </Slide>
    </>
  )
}

export default Slide8
