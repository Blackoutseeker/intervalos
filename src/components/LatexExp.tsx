'use client'

import type { FC, HTMLAttributes } from 'react'
import Latex from 'react-latex'

interface LatexExpProps {
  props?: HTMLAttributes<HTMLHeadingElement>
  latexExpression: string
}

const LatexExp: FC<LatexExpProps> = ({ props, latexExpression }) => {
  return (
    <h3 {...props}>
      <Latex>{`${latexExpression}`}</Latex>
    </h3>
  )
}

export default LatexExp
