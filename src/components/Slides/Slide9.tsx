import type { FC } from 'react'
import Slide from '../Slide'

const Slide9: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <pre className="text-base md:text-xl dark:text-white overflow-x-auto whitespace-pre-line break-words">
            {`
            import numpy as np
            import scipy.stats as stats

            # Amostra de dados
            data = np.array([17, 21, 18, 16, 20, 19, 22, 16, 18, 20])

            # Nível de confiança desejado (em porcentagem)
            conf_level = 95

            # Cálculo do intervalo de confiança para a média
            mean, se = np.mean(data), stats.sem(data)
            lower_ci, upper_ci = stats.t.interval(conf_level/100, len(data)-1, loc=mean, scale=se)

            # Exibição dos resultados
            print(f"Intervalo de confiança ({conf_level}%): [{lower_ci:.2f}, {upper_ci:.2f}]")
            print(f"Média da amostra: {mean:.2f}")
            `}
          </pre>
          <p className="text-lg font-bold text-justify dark:text-white md:text-left md:text-2xl m-4 mt-10">
            Neste exemplo em Python, estamos calculando um intervalo de
            confiança para a média de uma amostra. Utilizamos a biblioteca NumPy
            para lidar com os dados e a biblioteca SciPy para realizar os
            cálculos estatísticos. O intervalo de confiança é calculado com base
            na distribuição t de Student.
          </p>
        </div>
      </Slide>
    </>
  )
}

export default Slide9
