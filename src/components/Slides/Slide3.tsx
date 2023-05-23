import type { FC } from 'react'
import Slide from '../Slide'
import LatexExp from '../LatexExp'

const Slide3: FC = () => {
  return (
    <>
      <Slide>
        <div className="flex md:flex-1 flex-col justify-center items-center">
          <LatexExp
            props={{
              className: `text-2xl font-bold text-justify dark:text-white md:text-left md:text-5xl m-10`
            }}
            latexExpression={
              '$\\text{{IC}} = \\bar{x} \\pm z \\cdot \\frac{\\sigma}{\\sqrt{\\text{{N}}}}$'
            }
          />
          <div
            className="text-xl font-bold text-left dark:text-white
            md:text-left md:text-3xl md:m-10"
          >
            <LatexExp
              latexExpression={'$\\text{{IC}}$ = Intervalo de confiança'}
            />
            <LatexExp latexExpression={'$\\bar{x}$ = Média da amostra'} />
            <LatexExp latexExpression={'$\\text{{z}}$ = Nível de confiança'} />
            <LatexExp
              latexExpression={'$\\sigma$ = Desvio padrão da amostra'}
            />
            <LatexExp latexExpression={'$\\text{{N}}$ = Tamanho da amostra'} />
          </div>
        </div>
      </Slide>
    </>
  )
}

export default Slide3
