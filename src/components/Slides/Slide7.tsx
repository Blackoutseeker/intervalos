import type { FC } from 'react'
import Slide from '../Slide'

const Slide7: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <p className="text-lg font-bold text-justify dark:text-white md:text-left md:text-3xl md:m-10">
            Um exemplo prático onde a estimação por intervalo de confiança para
            médias é aplicada é em estudos científicos para avaliar a eficácia
            de um novo medicamento.
            <br />
            Nesse caso, uma amostra de pacientes é tratada com o medicamento e a
            média de um determinado parâmetro de interesse, como a pressão
            arterial, é calculada. Em seguida, um intervalo de confiança é
            construído para estimar a média populacional da pressão arterial com
            um determinado nível de confiança.
          </p>
        </div>
      </Slide>
    </>
  )
}

export default Slide7
