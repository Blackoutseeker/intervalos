import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          as="style"
          rel="stylesheet preload prefetch"
          type="text/css"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-[#d3d3d3] dark:bg-[#121212]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
