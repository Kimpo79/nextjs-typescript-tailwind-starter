import { ReactNode } from 'react'
import styled from '@emotion/styled'
import Head from 'next/head'

const Main = styled.main``

interface Props {
  children: ReactNode
}

export default function Default({ children }: Props) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='DESCRIPTION' />
        <meta name='og:title' content='SITE TITLE' />
      </Head>
      <Main>{children}</Main>
    </>
  )
}
