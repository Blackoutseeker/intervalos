import type { FC } from 'react'
import Slide from '../Slide'

const Slide6: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center dark:text-white underline md:text-left md:text-3xl m-4">
            Interpretação dos intervalos de confiança
          </h2>
          <p className="text-lg font-bold text-justify dark:text-white md:text-left md:text-3xl md:m-10">
            Ao interpretar um intervalo de confiança, é importante compreender
            que ele fornece uma faixa de valores plausíveis para o parâmetro
            populacional.
            <br />
            Quanto maior o nível de confiança desejado, mais amplo será o
            intervalo, refletindo uma maior incerteza. Por outro lado, quanto
            maior o tamanho da amostra, mais preciso será o intervalo de
            confiança.
          </p>
        </div>
      </Slide>
    </>
  )
}

export default Slide6
